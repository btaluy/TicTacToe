import {Injectable, NgZone} from '@angular/core';

import { Board, MenuItemName, Square, State } from "~/assets/domain";
import { Color } from "ui/page";
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout/stack-layout';
import { LeaderBoardService } from './leaderboard.service';
import { PopupService } from '~/assets/services';

@Injectable()
export class MultiPlayerService {
  public sessionGameWon: boolean = false;
  public board: Board = new Board(3);

  public constructor(private popupService: PopupService, private zone: NgZone, private leaderBoard: LeaderBoardService) { }

  public restart(): void {
    this.newGame(0);
  }

  public mark(square: Square): void {
    if(square.canChangeState) {
      square.state = this.board.currentState;
      this.board.marksCount++;
      this.setGameWonStateFrom(square);
      this.board.changeCurrentState();
    }
  }

  public newGame(miliSeconds: number = 2000): void {
    setTimeout(() => {
      this.sessionGameWon = false;
      this.board.startNewGame();
    }, miliSeconds);
  }

  public get gamePanelStateImageVisibility(): string {
    return this.board.isDraw ? 'collapsed': 'visible';
  }
 
  public get gamePanelCaption(): string {
    if (this.board.isDraw) {
      return 'Draw';
    }
    return this.board.isGameWon ? 'Winner': 'Next';
  }

  private incrementWinnerScore(): void {
    if (this.board.currentState === State.Cross) {
      this.leaderBoard.mpScore.crossScore++;
      this.leaderBoard.updateMPScore();
    } else {
      this.leaderBoard.mpScore.circleScore++;
      this.leaderBoard.updateMPScore();
    }
  }

  private setGameWonStateFrom(square: Square): void {
    this.board.isGameWon = this.board.getWinningIndexesFor(square) != undefined;
    if (this.board.isGameWon)
      this.incrementWinnerScore();
  }
}