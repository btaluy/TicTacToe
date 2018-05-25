import { Board, State } from '../../assets/domain';

describe('The Board model', () => {
  let board: Board;

  beforeEach(() => {
    board = new Board(3);
    board.startNewGame();
  });

  it('should call setCrossScore with a desired value and should update the crossScore', () => {
    board.setCrossScore(1);
    expect(board.crossScore).toBe(1);
  });

  it('should call setCircleScore with a desired value and should update the circleScore', () => {
    board.setCircleScore(9);
    expect(board.circleScore).toBe(9);
  });

  it('should call setDrawScore with a desired value and should update the drawScore', () => {
    board.setDrawScore(4);
    expect(board.drawScore).toBe(4);
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