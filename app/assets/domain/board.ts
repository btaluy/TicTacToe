import {
  getBoolean, setBoolean, getNumber, setNumber,
  getString, setString, hasKey, remove, clear
} from "application-settings";

import { Square, State, WinnerRetriever } from './index';

export class Score {
  public crossScore: number = 0;
  public circleScore: number = 0;
  public drawScore: number = 0;

  public static fromObject(object: any): Score {
    const score: Score = new Score();
    score.circleScore = object.circleScore;
    score.crossScore = object.crossScore;
    score.drawScore = object.drawScore;

    return score;
  }
}

export class Board {
  public boardSize: number;
  public squares: Square[] = [];
  public currentState: State;
  public isGameWon: boolean;
  public marksCount: number = 0;
  public winnerRetreiver: WinnerRetriever;

  public constructor(size: number) {
    this.boardSize = size;
    this.squares = [];
    this.currentState = State.Cross;
    this.startNewGame();
  }

  public startNewGame(): void {
    this.isGameWon = false;
    this.currentState = State.Cross;
    this.marksCount = 0;
    this.initializeBoard();
    this.winnerRetreiver = new WinnerRetriever(this.squares, this.boardSize);
  }

  public getWinningIndexesFor(square): number[] {
    return this.winnerRetreiver.getWinningIndexesFor(square);
  }

  public getEmptySquares(): Square[] {
    return this.winnerRetreiver.getEmptySquares();
  }

  public calculateBoard(): any[] {
    return this.winnerRetreiver.calculateBoard();
  }

  public getBestSpot(index: any): Square {
    return this.winnerRetreiver.getBestSpot(index);
  }

  public changeCurrentState(): void {
    if(!this.isGameWon) {
      this.currentState = this.nextState;
    }
  }

  public get isDraw(): boolean {
    return !this.isGameWon && this.isBoardFull;
  }

  private get nextState(): State {
    return (this.currentState == State.Cross) ? State.Circle : State.Cross;
  }

  private get isBoardFull(): boolean {
    return this.marksCount === (this.boardSize * this.boardSize);
  }

  private initializeBoard(): void {
    this.squares = [];
    this.squares.push(new Square(0, 0, 'square bottom-right'));
    this.squares.push(new Square(0, 1, 'square bottom-right'));
    this.squares.push(new Square(0, 2, 'square bottom'));
    this.squares.push(new Square(1, 0, 'square bottom-right'));
    this.squares.push(new Square(1, 1, 'square bottom-right'));
    this.squares.push(new Square(1, 2, 'square bottom'));
    this.squares.push(new Square(2, 0, 'square right'));
    this.squares.push(new Square(2, 1, 'square right'));
    this.squares.push(new Square(2, 2, 'square'));
  }
}