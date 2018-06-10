import {Injectable, NgZone, ApplicationRef } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { isNullOrUndefined } from 'utils/types';
import * as firebase from 'nativescript-plugin-firebase';

import { Board, MenuItemName, Square, State } from "~/assets/domain";
import { Color } from "ui/page";
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout/stack-layout';
import { LeaderBoardService } from './leaderboard.service';
import { PopupService, UserService, NavigationService } from '~/assets/services';
import { Session } from '~/assets/domain/session';

@Injectable()
export class MultiPlayerService {
  public sessionGameWon: boolean = false;
  public session: Session = new Session();
  public isJoiningGame: boolean = false;
  public playerState: State;
  public inCreateSession: boolean = false;
  public inJoinSession: boolean = false;
  public isJoiningASession: boolean = false;
  public isScoreUpdated: boolean = false;

  public squares: Array<StackLayout> = [];

  private SessionCollection = firebase.firestore.collection("sessions");
  public mpSubscription: any;

  public constructor(private popupService: PopupService,
                     private navigationService: NavigationService,
                     private zone: NgZone,
                     private leaderBoard: LeaderBoardService,
                      private app: ApplicationRef) { }

  public restart(): void {
    this.newGame(0);
  }

  public mark(square: Square): void {
    if (square.canChangeState) {
      for (let square of this.session.board.squares) {
        square.lastPlayed = false;
      }

      square.lastPlayed = true;
      square.state = this.session.board.currentState;
      this.session.board.marksCount++;
      this.setGameWonStateFrom(square);
      this.session.board.changeCurrentState();
      this.updateSession();
    }
  }

  public newGame(miliSeconds: number = 2000): void {
    setTimeout(() => {
      this.clearSession();
      this.sessionGameWon = false;
      this.session.board.startNewGame();
      this.updateSession();
    }, miliSeconds);
  }

  public createSessionAndGetSessionId(): Promise<any> {
    this.isJoiningGame = false;
    this.session = new Session();
    this.session.createSession(this.leaderBoard.getUserUid(), 'x');
    this.playerState = State.Cross;
    return this.SessionCollection.add(this.session)
      .then(documentRef => {
        this.updateSessionId(documentRef.id)
          .then(() => this.setMPSub(documentRef.id));
        return documentRef.id;
      });
  }

  public joinSessionWithSessionId(id: string): Promise<any> {
    return this.SessionCollection.doc(id)
      .update({
        player2: this.leaderBoard.getUserUid()
      }).then(() => {
        this.playerState = State.Circle;
        this.setMPSub(id);
        console.log('session updated, player2 joined!');
      });
  }

  public updateSession(): Promise<any> {
    const query = this.SessionCollection.doc(this.session.id);
    
    return query.update(this.session)
      .then(() => {
        console.log('session updated');
      })
      .catch(error => console.log('oh oh, an error occured: ', error));
  }

  public get gamePanelStateImageVisibility(): boolean {
    return this.session.board.isDraw ? false : true;
  }
 
  public get gamePanelCaption(): string {
    const playerState: boolean = this.session.board.currentState === this.playerState;
    if (this.session.board.isDraw) {
      return 'Draw';
    }
    if (this.session.board.isGameWon) {
      return playerState ? 'You won' : 'You lost';
    } else {
      return playerState ? 'Your turn' : 'Opponent\'s turn';
    }
  }

  public setGameWonStateFrom(square: Square): void {
    this.session.board.isGameWon = this.session.board.getWinningIndexesFor(square) != undefined;
    if (this.session.board.isGameWon) {
      console.log('Game won is set!');
    }
  }

  public getGameWonState(): void {
    if (this.session.board.isGameWon && this.sessionGameWon && !this.isScoreUpdated) {
      console.log('Game is won!');
      this.incrementWinnerScore();
    }
  }

  public clearSession(): void {
    this.inCreateSession = false;
    this.inJoinSession = false;
    this.isJoiningASession = false;
    this.isJoiningGame = false;
    this.isScoreUpdated = false;
    this.sessionGameWon = false;
  }

  public updateState(square: Square, squares: Array<StackLayout>): Promise<any> {
    return new Promise((resolve, reject) => {
      if(isNullOrUndefined(square)) {
        return resolve();
      }

      const winningIndexes: number[] = this.session.board.getWinningIndexesFor(square);

      if (winningIndexes) {
        this.sessionGameWon = true;
        this.zone.run(() => {
          for (let index of winningIndexes) {
            setTimeout(() => {
              let view = squares[index];
              view.backgroundColor = new Color("#000000");
              view.animate({ backgroundColor: new Color("#BA4A00"), duration: 1000 });
              this.app.tick();
            }, 50);
          }
        });

        return resolve(this.newGame(2000));
      } else if (this.session.board.isDraw) {
        this.leaderBoard.mpScore.draws++;
        this.leaderBoard.updateMPScore();
        return resolve(this.newGame(2000));
      }
      return resolve();
    });
  }

  private setMPSub(id: string): void {
    const query = this.SessionCollection.doc(id);
    this.mpSubscription = query.onSnapshot(doc => {
      this.zone.run(() => {
        this.getSession(id);
        });
    });
  }

  private updateSessionId(id: string): Promise<any> {
    return this.SessionCollection.doc(id)
      .update({
        id: id
      });
  }

  private findLastPlayedSquare(): Square {
    for (const square of this.session.board.squares) {
      if(square.lastPlayed === true) {
        return square;
      }
    }
    
    return null;
  }

  private incrementWinnerScore(): void {
    this.isScoreUpdated = true;
    if (this.session.board.currentState === this.playerState) {
      this.leaderBoard.mpScore.wins++;
    } else {
      this.leaderBoard.mpScore.losses++;
    }

    this.leaderBoard.updateMPScore();
  }

  private getSession(id: string): Promise<any> {
    const query = this.SessionCollection.doc(id);
     
    return query.get()
      .then(doc => {
        if (doc.exists) {
          this.session = Session.fromObject(doc.data());

          if(this.session.isGameOver ) {
            this.popupService.toast('Game cancelled!');
            this.navigationService.navigateToAndClearHistory(MenuItemName.multiplayer, undefined, 'slideRight');
            return;
          }

          setTimeout(() => {
            if(!isNullOrUndefined(this.session.player1) && !isNullOrUndefined(this.session.player2)) {
              if (!this.isJoiningGame) {
                console.log('is joining game.');
                this.isJoiningGame = true;
                this.popupService.toast('joining session');
                this.navigationService.navigateToAndClearHistory(MenuItemName.mpSession);
                return;
              }
            }
          }, 100);

          this.updateState(this.findLastPlayedSquare(), this.squares)
          .then(() => {
            this.getGameWonState();
          });
        } else {
          console.log('No session found!');
          this.isJoiningGame = false;
        }
      })
      .catch(error => console.log(`Error while fetching: ${error}`));
  }
}