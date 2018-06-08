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

  public static fromObject(object: any): Board {
    const board: Board = new Board(3);
    
    board.boardSize = object.boardSize;
    board.currentState = object.currentState;
    board.isGameWon = object.isGameWon;
    board.marksCount = object.marksCount;
    
    if (object.squares) {
      board.squares = [];
      object.squares.forEach(item => {
        board.squares.push(Square.fromObject(item));
      });
    }

    if (object.winnerRetreiver) {
      const squares: Square[] = [];

      if (object.winnerRetreiver.squares) {
        for (const item of object.winnerRetreiver.squares) {
          squares.push(Square.fromObject(item));
        }
      }
              
      board.winnerRetreiver = new WinnerRetriever(squares, object.winnerRetreiver.boardSize);
    }

    return board;
  }

  public startNewGame(): void {
    this.isGameWon = false;
    this.currentState = State.Cross;
    this.marksCount = 0;
    this.initializeBoard();
    this.winnerRetreiver = new WinnerRetriever(this.squares, this.boardSize);
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
    this.squares.push(Square.createSquare(0, 0, 'square bottom-right'));
    this.squares.push(Square.createSquare(0, 1, 'square bottom-right'));
    this.squares.push(Square.createSquare(0, 2, 'square bottom'));
    this.squares.push(Square.createSquare(1, 0, 'square bottom-right'));
    this.squares.push(Square.createSquare(1, 1, 'square bottom-right'));
    this.squares.push(Square.createSquare(1, 2, 'square bottom'));
    this.squares.push(Square.createSquare(2, 0, 'square right'));
    this.squares.push(Square.createSquare(2, 1, 'square right'));
    this.squares.push(Square.createSquare(2, 2, 'square'));
  }

  public getWinningIndexesFor(square: Square): number[] {
    let steps = [
      this.getWinningSquareIndexesInRowOf,
      this.getWinningSquareIndexesInColumnOf,
      this.getWinningIndexesInDiagonal,
      this.getWinningIndexesInAntiDiagonal
    ];

    for (let step of steps) {
      let winningIndexes = step.call(this, square);
      if (winningIndexes) {
        return winningIndexes;
      }
    }
  }

  public getEmptySquares(): Square[] {
    let emptySquareIndexes: Square[] = [];

    for(let i = 0; i < 9; i++) {
      if(this.squares[i].state === State.Blank) {
        emptySquareIndexes.push(this.squares[i]);
      }
    }

    return emptySquareIndexes;
  }

  public calculateBoard(): any[] {
    const squares: Square[] = this.squares;
    let origBoard: any[] = [];

    for (let i = 0; i < squares.length; i++) {
      switch(squares[i].state) {
        case State.Cross: 
          origBoard.push('X');
        break;
        case State.Circle:
          origBoard.push('O');
        break;
        default:
          origBoard.push(i);
        break;
      }
    }

    return origBoard;
  }

  public getBestSpot(index: number): Square {
    return this.squares[index];
  }

  private getWinningIndexesInDiagonal(square: Square): number[] {
    if(square.xPosition == square.yPosition) {
      return this.getWinningSquareIndexes(square, 0, this.boardSize + 1);
    }
  }

  private getWinningSquareIndexesInRowOf(square: Square): number[]  {
    const numberOfSquares = this.boardSize * square.xPosition;
    return this.getWinningSquareIndexes(square, numberOfSquares, 1);
  }

  private getWinningSquareIndexesInColumnOf(square: Square): number[] {
    return this.getWinningSquareIndexes(square, square.yPosition, this.boardSize);
  }

  private getWinningIndexesInAntiDiagonal(square: Square): number[] {
    if(square.xPosition + square.yPosition === this.boardSize - 1) {
      return this.getWinningSquareIndexes(square, this.boardSize - 1, this.boardSize -1);
    }
  }

  private getWinningSquareIndexes(square: Square, offsetInitvalue: number, offsetIncrement): number[] {
    let winningSeriesIndexes: number[] = [];
    let offset = offsetInitvalue;

    console.log('squares: ', this.squares);

    for(let i = 0; i < this.boardSize; i++) {
      if(this.squares[offset].state != square.state) {
        return undefined;
      }

      winningSeriesIndexes.push(offset);
      offset += offsetIncrement;

      console.log('winningSeriesIndexes: ', winningSeriesIndexes);
    }

    return winningSeriesIndexes;
  }
}