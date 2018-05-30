import {
  getBoolean, setBoolean, getNumber, setNumber,
  getString, setString, hasKey, remove, clear
} from "application-settings";

import { Square, State, WinnerRetriever } from './index';

export class Score {
  public crossScore: number = 0;
  public circleScore: number = 0;
  public drawScore: number = 0;
}

export class Board {
  public boardSize: number;
  public squares: Square[] = [];
  public currentState: State;
  public score: Score = new Score();
  public isGameWon: boolean;
  public winnerRetreiver: WinnerRetriever;

  private _marksCount: number = 0;

  public constructor(size: number) {
    this.boardSize = size;
    this.squares = [];
    this.score.crossScore = getNumber('crossScore', 0);
    this.score.circleScore = getNumber('circleScore', 0);
    this.score.drawScore = getNumber('drawScore', 0);
    this.currentState = State.Cross;
    this.startNewGame();
  }

  public startNewGame(): void {
    this.isGameWon = false;
    this.currentState = State.Cross;
    this._marksCount = 0;
    this.initializeBoard();
    this.winnerRetreiver = new WinnerRetriever(this.squares, this.boardSize);
  }

  public mark(square: Square): void {
    if(square.canChangeState) {
      square.state = this.currentState;
      this._marksCount++;
      this.setGameWonStateFrom(square);
      this.changeCurrentState();
    }
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

  public setCrossScore(value: number): void {
    this.score.crossScore = value;
    setNumber('crossScore', this.score.crossScore);
  }

  public setCircleScore(value: number): void {
    this.score.circleScore = value;
    setNumber('circleScore', this.score.circleScore);
  }

  public setDrawScore(value: number): void {
    this.score.drawScore = value;
    setNumber('drawScore', this.score.drawScore);
  }

  public get isDraw(): boolean {
    return !this.isGameWon && this.isBoardFull;
  }

  private setGameWonStateFrom(square: Square): void {
    this.isGameWon = this.getWinningIndexesFor(square) != undefined;
    if (this.isGameWon)
      this.incrementWinnerScore();
  }

  private incrementWinnerScore(): void {
    if (this.currentState === State.Cross) {
      this.score.crossScore++;
      this.setCrossScore(this.score.crossScore);
    } else {
      this.score.circleScore++;
      this.setCircleScore(this.score.circleScore);
    }
  }

  private changeCurrentState(): void {
    if(!this.isGameWon) {
      this.currentState = this.nextState;
    }
  }

  private get nextState(): State {
    return (this.currentState == State.Cross) ? State.Circle : State.Cross;
  }

  private get isBoardFull(): boolean {
    return this._marksCount === (this.boardSize * this.boardSize);
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