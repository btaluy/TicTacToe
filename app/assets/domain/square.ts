export class Square {
  public state: State;
  public xPosition: number;
  public yPosition: number;

  public constructor(x: number, y: number) {
    this.state = State.Blank;
    this.xPosition = x;
    this.yPosition = y;
  }

  public get canChangeState(): boolean {
    return this.state == State.Blank;
  }
}

export enum State {
  Blank,
  Cross,
  Circle
}