export class Session {
  public player1: string = null; // the player that creates the session
  public player2: string = null; // the player that joins the session
  public isGameWon: boolean = false;
  public currentState: string = '';
  
  // TODO: Add the squares that are set

  public createSession(player1: string, currentState: string) {
    this.player1 = player1;
    this.currentState = currentState;
  }

  public static fromObject(object: any): Session {
    const session: Session = new Session();
    session.player1 = object.player1;
    session.player2 = object.player2;
    session.isGameWon = object.isGameWon;
    session.currentState = object.currentState;

    return session;
  }
}