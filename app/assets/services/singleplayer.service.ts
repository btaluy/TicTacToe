import {Injectable} from '@angular/core';

import { Board, MenuItemName, Square, State } from "~/assets/domain";
import { Color } from "ui/page";
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout/stack-layout';

@Injectable()
export class SinglePlayerService {
  public sessionGameWon: boolean = false;
  public board: Board = new Board(3);

  public restart(): void {
    this.newGame(0);
  }

  public reset(): void {
    this.restart();
    this.board.setCircleScore(0);
    this.board.setCrossScore(0);
    this.board.setDrawScore(0);
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

  public get foundSquare(): Square {
    const min = 0;
    const max = this.board.getEmptySquares().length;

    if(max > 0) {
      const chosenTile: number = Math.floor(Math.random() * (max-min));
      return this.board.getEmptySquares()[chosenTile];
    }
    
    return undefined;
  }
}