import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from "@angular/core";
import * as platform from 'platform';
import { GridLayout } from 'ui/layouts/grid-layout';
import { StackLayout } from 'ui/layouts/stack-layout';
import { EventData } from 'data/observable';
import { Page, Color } from "ui/page";

import { NavigationService, PopupService, SinglePlayerService } from "~/assets/services";
import { Board, MenuItemName, Square, State } from "~/assets/domain";

@Component({
    selector: "Singleplayer",
    moduleId: module.id,
    templateUrl: "./singleplayer.component.html"
})
export class SinglePlayerComponent implements OnInit {
  @ViewChild('boardGrid') public boardGrid: ElementRef;
  @ViewChildren('square') squares: QueryList<ElementRef>;

  public board: Board = new Board(3);

  constructor(
    public singlePlayerService: SinglePlayerService,
    private _page: Page,
    private _navigationService: NavigationService,
    private _popupService: PopupService
  ) { }

  ngOnInit(): void {
    this._page.actionBarHidden = true;
    this.makeBoardGridSquared();
  }

  public mark(square): void {
    if (!this.singlePlayerService.sessionGameWon) {
      this.board.mark(square);
      this.updateState(square);
    }
  }

  public newGame(miliSeconds: number = 2000): void {
    setTimeout(() => {
      this.singlePlayerService.sessionGameWon = false;
      this.board.startNewGame();
    }, miliSeconds);
  }

  public get boardSideSpecification(): string {
    let specs = [];
    for (let i = 0; i < this.board.boardSize; i++) {
      specs.push('*');
    }
 
    return specs.join(',');
  }

  public get foundSquare(): Square {
    const min = 0;
    const max = this.board.getEmptySquares().length;
    const chosenTile: number = Math.floor(Math.random() *(max-min+1)+min);
    return this.board.getEmptySquares()[chosenTile];
  }

  public get gamePanelStateImageVisibility(): string {
    return this.board.isDraw ? 'collapsed': 'visible';
  }
 
  public get gamePanelCaption(): string {
    if (this.board.isDraw) {
      return 'Draw';
    }
    return this.board.isGameWon ? 'Winner': 'Next to play';
  }

  public classOf(square: Square): string {
    return (square.xPosition + square.yPosition) % 2 == 0 ? 'light-square' : 'dark-square';
  }

  public restartDialog(): void {
    this._popupService.confirm('Restart', 'Are you sure you want to restart the game?', 'Yes', 'No')
      .then((result: any) => {
        if (result) {
          this.restart();
        }
      });
  }

  private restart(): void {
    this.newGame();
    this.board.circleScore = 0;
    this.board.crossScore = 0;
  }

  private updateState(square: Square): void {
    const winningIndexes: number[] = this.board.getWinningIndexesFor(square);
    const foundSquare: Square = this.board.getEmptySquares().length > 0 ? this.foundSquare : undefined; 

    if (winningIndexes) {
      this.singlePlayerService.sessionGameWon = true;

      for (let index of winningIndexes) {
        let view = this.squareViews[index];
        view.animate({ backgroundColor: new Color("#BA4A00"), duration: 2000 });
      }
      
      return this.newGame(4000);
    } else if (this.board.isDraw) {
      return this.newGame();
    }

    if (foundSquare && this.board.currentState === State.Circle) {
      setTimeout(() => {
        this.mark(foundSquare);
      }, 1000);
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
