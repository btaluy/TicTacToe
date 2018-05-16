import { Board, State } from '../../assets/domain';

describe('The Board model', () => {
  let board: Board;

  beforeEach(() => {
    board = new Board(3);
  });

  it('should have the right property values when defined.', () => {
    expect(board.boardSize).toBe(3);
    expect(board.crossScore).toBe(0);
    expect(board.circleScore).toBe(0);
    expect(board.drawScore).toBe(0);
    expect(board.currentState).toBe(State.Cross);
    expect(board.isGameWon).toBeFalsy();
  });
});