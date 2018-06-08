import {Injectable, NgZone } from '@angular/core';
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
  public isSessionUpdated: ReplaySubject<Session> = new ReplaySubject<Session>();

  private SessionCollection = firebase.firestore.collection("sessions");
  public mpSubscription: any;

  public constructor(private popupService: PopupService,
                     private navigationService: NavigationService,
                     private zone: NgZone,
                     private leaderBoard: LeaderBoardService) { }

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
      this.sessionGameWon = false;
      this.session.board.startNewGame();
    }, miliSeconds);
  }

  public createSessionAndGetSessionId(): Promise<any> {
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

  private updateSessionId(id: string): Promise<any> {
    return this.SessionCollection.doc(id)
      .update({
        id: id
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

  private setMPSub(id: string): void {
    if (!this.mpSubscription) {
      const query = this.SessionCollection.doc(id);
      this.mpSubscription = query.onSnapshot(doc => {
        this.zone.run(() => {
          this.getSession(id)
            .then(() => {
              this.isSessionUpdated.next(this.session);
            });
          });
      });
    }
  }

  private getSession(id: string): Promise<any> {
    const query = this.SessionCollection.doc(id);
     
    return query.get()
      .then(doc => {
        if (doc.exists) {
          this.session = Session.fromObject(doc.data());

          if(!isNullOrUndefined(this.session.player1) && !isNullOrUndefined(this.session.player2)) {
            if (!this.isJoiningGame) {
              this.isJoiningGame = true;
              this.popupService.toast('joining session');
              this.navigationService.navigateTo(MenuItemName.mpSession);
            }
          }
        } else {
          console.log('No session found!');
          this.isJoiningGame = false;
        }
      })
      .catch(error => console.log(`Error while fetching: ${error}`));
  }

  public findLastPlayedSquare(): Square {
    for (const square of this.session.board.squares) {
      if(square.lastPlayed === true) {
        return square;
      }
    }
    
    return null;
  }

  private updateSession(): Promise<any> {
    const query = this.SessionCollection.doc(this.session.id);
    
    return query.update(this.session)
      .then(() => {
        console.log('session updated');
      })
      .catch(error => console.log('oh oh, an error occured: ', error));
  }

  public get gamePanelStateImageVisibility(): string {
    return this.session.board.isDraw ? 'collapsed': 'visible';
  }
 
  public get gamePanelCaption(): string {
    if (this.session.board.isDraw) {
      return 'Draw';
    }
    return this.session.board.isGameWon ? 'Winner': 'Next';
  }

  private incrementWinnerScore(): void {
    if (this.session.board.currentState === this.playerState) {
      if (this.playerState === State.Cross)
        this.leaderBoard.mpScore.wins++;
      else 
        this.leaderBoard.mpScore.losses++;

      this.leaderBoard.updateMPScore();
    }
  }

  public setGameWonStateFrom(square: Square): void {
    this.session.board.isGameWon = this.session.board.getWinningIndexesFor(square) != undefined;
    if (this.session.board.isGameWon)
      this.incrementWinnerScore();
  }
}