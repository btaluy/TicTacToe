import { Square, State } from '../../assets/domain';

describe('The Square model', () => {
  let square: Square = Square.createSquare(0, 0, '');

  it('should be defined', () => {
    expect(square).toBeDefined();
  });

  it('should be the first square in the board', () => {
    expect(square.xPosition).toBe(0);
    expect(square.yPosition).toBe(0);
  });

  it('should be a blank square which is playable and not played already', () => {
    expect(square.canChangeState).toBeTruthy();
  });
});