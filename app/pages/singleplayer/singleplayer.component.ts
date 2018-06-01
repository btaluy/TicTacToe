import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from "@angular/core";
import * as platform from 'platform';
import { GridLayout } from 'ui/layouts/grid-layout';
import { StackLayout } from 'ui/layouts/stack-layout';
import { EventData } from 'data/observable';
import { Page, Color } from "ui/page";

import { NavigationService, PopupService, SinglePlayerService, AudioService } from "~/assets/services";
import { Board, MenuItemName, Square, State } from "~/assets/domain";
import { LeaderBoardService } from "~/assets/services/leaderboard.service";

@Component({
    selector: "Singleplayer",
    moduleId: module.id,
    templateUrl: "./singleplayer.component.html"
})
export class SinglePlayerComponent implements OnInit {
  @ViewChild('boardGrid') public boardGrid: ElementRef;
  @ViewChildren('square') squares: QueryList<ElementRef>;

  // human
  public huPlayer: string = "X";
  // ai
  public aiPlayer: string = "O";

  constructor(
    public spService: SinglePlayerService,
    public audioService: AudioService,
    public leaderBoard: LeaderBoardService,
    private _page: Page,
    private _navigationService: NavigationService,
    private _popupService: PopupService
  ) { }

  ngOnInit(): void {
    this._page.actionBarHidden = true;
    this.makeBoardGridSquared();
  }

  public mark(square: Square): void {
    if (!this.spService.sessionGameWon
        && this.spService.board.currentState === State.Cross
        && square.state === State.Blank) {
      this.audioService.clickSound();
      this.spService.mark(square);
      this.updateState(square)
        .then(() => {
          this.botMark();
        });
    }
  }

  public newGame(miliSeconds: number = 2000): void {
    this.spService.newGame(miliSeconds);
  }

  public get boardSideSpecification(): string {
    let specs = [];
    for (let i = 0; i < this.spService.board.boardSize; i++) {
      specs.push('*');
    }
 
    return specs.join(',');
  }

  public get gamePanelStateImageVisibility(): string {
    return this.spService.gamePanelStateImageVisibility;
  }
 
  public get gamePanelCaption(): string {
    return this.spService.gamePanelCaption;
  }

  public restartDialog(): void {
    this._popupService.confirm('Restart', 'Are you sure you want to restart the game?', 'Yes', 'No')
      .then((result: any) => {
        if (result) {
          this.spService.restart();
        }
      });
  }

  private updateState(square: Square): Promise<any> {
    return new Promise((resolve, reject) => {
      const winningIndexes: number[] = this.spService.board.getWinningIndexesFor(square);

      if (winningIndexes) {
        this.spService.sessionGameWon = true;

        for (let index of winningIndexes) {
          let view = this.squareViews[index];
          view.backgroundColor = new Color("#000000");
          view.animate({ backgroundColor: new Color("#BA4A00"), duration: 1000 });
        }
        
        resolve(this.newGame(2000));
      } else if (this.spService.board.isDraw) {
        this.leaderBoard.spScore.drawScore++;
        this.leaderBoard.updateSPScore()
          .then(() => {
            resolve(this.newGame());
          });
      }
      resolve();
    });
  }

  private botMark(): void {
    const bestSpot = this.miniMax(this.spService.board.calculateBoard(), this.aiPlayer);
    let foundSquare: Square;
    
    if(this.shouldUseMiniMax()) {
      foundSquare = this.spService.board.getBestSpot(bestSpot.index);
    } else {
      foundSquare = this.spService.foundSquare;
    }
    
    if (foundSquare &&!this.spService.sessionGameWon) {
      setTimeout(() => {
        this.audioService.clickSound();
        this.spService.mark(foundSquare);
        this.updateState(foundSquare);
      }, 1000);
    }
    
  }

  private shouldUseMiniMax(): boolean {
    const array: number[] = [5, 5, 5, 5, 5, 5, 5, 5, 5, 95];
    const randomChosenNumber: number = array[Math.floor(Math.random() * (10-0))];

    return randomChosenNumber === 5 ? true : false;
  }

  private miniMax(newBoard: any[], player: string): any {
    //check which spots are available and store them in an object.
    const availSpots = this.emptyIndexies(newBoard);

    if (this.winning(newBoard, this.huPlayer)){
        return {score:-10};
    }
    else if (this.winning(newBoard, this.aiPlayer)){
      return {score:10};
    }
    else if (availSpots.length === 0){
      return {score:0};
    }

    let moves: any[] = [];

    for (let i = 0; i < availSpots.length; i++){
      let move = {index: 0, score: 0};
      move.index = newBoard[availSpots[i]];

      newBoard[availSpots[i]] = player;

      if (player == this.aiPlayer){
        var result = this.miniMax(newBoard, this.huPlayer);
        move.score = result.score;
      } else {
        var result = this.miniMax(newBoard, this.aiPlayer);
        move.score = result.score;
      }

      //reset the spot to empty
      newBoard[availSpots[i]] = move.index;

      // push the object to the array
      moves.push(move);
    }

    const bestMove = this.checkBestMove(player, moves);

    return moves[bestMove];
  }

  private checkBestMove(player: any, moves: any): any {
    let bestMove;

    if(player === this.aiPlayer){
      let bestScore = -10000;
      for(var i = 0; i < moves.length; i++){
        if(moves[i].score > bestScore){
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      // else loop over the moves and choose the move with the lowest score
      let bestScore = 10000;
      for(var i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }

    return bestMove;
  }

  private emptyIndexies(board: any[]): any[] {
    return board.filter(s => s != "O" && s != "X");
  }

  private winning(board, player){
    if ((board[0] == player && board[1] == player && board[2] == player) ||
        (board[3] == player && board[4] == player && board[5] == player) ||
        (board[6] == player && board[7] == player && board[8] == player) ||
        (board[0] == player && board[3] == player && board[6] == player) ||
        (board[1] == player && board[4] == player && board[7] == player) ||
        (board[2] == player && board[5] == player && board[8] == player) ||
        (board[0] == player && board[4] == player && board[8] == player) ||
        (board[2] == player && board[4] == player && board[6] == player)) {
          return true;
       } else {
          return false;
       }
  }

  private get boardGridView(): GridLayout {
    return this.boardGrid.nativeElement;
  }

  private makeBoardGridSquared(): void {
    const heightOverflow = 120;
    const height = this.screenHeight - heightOverflow;
    const minimumSideDimension = Math.min(this.screenWidth, height);
    this.boardGridView.height = minimumSideDimension;
    this.boardGridView.width = minimumSideDimension;
  }

  private get screenWidth(): number {
    return platform.screen.mainScreen.widthDIPs;
  }
 
  private get screenHeight(): number {
    return platform.screen.mainScreen.heightDIPs;
  }

  private get squareViews(): Array<StackLayout> {
    return this.squares.map(s => s.nativeElement);
  }
}
