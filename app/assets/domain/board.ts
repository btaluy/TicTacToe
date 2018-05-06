import {
  getBoolean, setBoolean, getNumber, setNumber,
  getString, setString, hasKey, remove, clear
} from "application-settings";

import { Square, State, WinnerRetriever } from './index';

export class Board {
  public boardSize: number;
  public squares: Square[] = [];
  public currentState: State;
  public crossScore: number;
  public circleScore: number;
  public drawScore: number;
  public isGameWon: boolean;
  public winnerRetreiver: WinnerRetriever;

  private _marksCount: number = 0;

  public constructor(size: number) {
    this.boardSize = size;
    this.squares = [];
    this.crossScore = getNumber('crossScore', 0);
    this.circleScore = getNumber('circleScore', 0);
    this.drawScore = getNumber('drawScore', 0);
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
    this.crossScore = value;
    setNumber('crossScore', this.crossScore);
  }

  public setCircleScore(value: number): void {
    this.circleScore = value;
    setNumber('circleScore', this.circleScore);
  }

  public setDrawScore(value: number): void {
    this.drawScore = value;
    setNumber('drawScore', this.drawScore);
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
      this.crossScore++;
      this.setCrossScore(this.crossScore);
    } else {
      this.circleScore++;
      this.setCircleScore(this.circleScore);
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
    /**
     * // generates
     * ///////////\\\\\\\\\\\\\ 
     * // 0, 0 | 0, 1 | 0, 2 \\
     * // ------------------ \\
     * // 1, 0 | 1, 1 | 1, 2 \\
     * // ------------------ \\ 
     * // 2, 0 | 2, 1 | 2, 2 \\
     * ///////////\\\\\\\\\\\\\ 
     */
    
    for (let x = 0; x < this.boardSize; x++) {
      for (let y = 0; y< this.boardSize; y++) {
        this.squares.push(new Square(x, y));
      }
    }
  }
}