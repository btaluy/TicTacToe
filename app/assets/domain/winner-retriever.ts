import { Square, State } from './index';

export class WinnerRetriever {
  public boardSize: number;
  public squares: Square[] = [];

  public constructor(squares: Square[], size: number) {
    this.squares = squares;
    this.boardSize = size;
  }
}