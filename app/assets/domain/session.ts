import { Square, State, Board } from "~/assets/domain";

export class Session {
  public id: string = null;
  public player1: string = null; // the player that creates the session
  public player2: string = null; // the player that joins the session
  public isGameOver: boolean = false;
  public board: Board = new Board(3);

  public createSession(player1: string, currentState: string) {
    this.player1 = player1;
  }

  public static fromObject(object: any): Session {
    const session: Session = new Session();
    session.id = object.id;
    session.player1 = object.player1;
    session.player2 = object.player2;
    session.isGameOver = object.isGameOver;
    session.board = Board.fromObject(object.board);

    return session;
  }
}