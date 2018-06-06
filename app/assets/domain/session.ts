export class Session {
  public player1: string = ''; // the player that creates the session
  public player2: string = ''; // the player that joins the session
  public isGameWon: boolean = false;
  public currentState: string = '';
  
  // TODO: Add the squares that are set

  public createSession(player1: string, currentState: string) {
    this.player1 = player1;
    this.currentState = currentState;
  }
}