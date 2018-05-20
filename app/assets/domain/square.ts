export class Square {
  public state: State;
  public xPosition: number;
  public yPosition: number;
  public classString: string;

  public constructor(x: number, y: number, classString: string) {
    this.state = State.Blank;
    this.xPosition = x;
    this.yPosition = y;
    this.classString = classString;
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