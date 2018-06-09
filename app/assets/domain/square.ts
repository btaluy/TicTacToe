export class Square {
  public state: State;
  public xPosition: number;
  public yPosition: number;
  public classString: string;
  public lastPlayed: boolean;

  public static fromObject(object: any): Square {
    const square: Square = new Square();
    
    square.state = object.state ? object.state : State.Blank;
    square.xPosition = object.xPosition;
    square.yPosition = object.yPosition;
    square.classString = object.classString;
    square.lastPlayed = object.lastPlayed;

    return square;
  }

  public static createSquare(x: number, y: number, classString: string): Square {
    const square: Square = new Square();
    
    square.state = State.Blank;
    square.xPosition = x;
    square.yPosition = y;
    square.classString = classString;

    return square;
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