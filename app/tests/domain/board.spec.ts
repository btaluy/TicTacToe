import { Board, State } from '../../assets/domain';

describe('The Board model', () => {
  let board: Board;

  beforeEach(() => {
    board = new Board(3);
    board.startNewGame();
  });

  it('should have the right property values when defined.', () => {
    expect(board.boardSize).toBe(3);
    expect(board.currentState).toBe(State.Cross);
    expect(board.isGameWon).toBeFalsy();
  });

  it('should call startNewGame and should reset the board', () => {
    board.startNewGame();
    expect(board.isGameWon).toBeFalsy();
    expect(board.currentState).toBe(State.Cross);
    expect(board.squares.length).toBe(9);
  });
});