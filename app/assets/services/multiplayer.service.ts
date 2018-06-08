import {Injectable, NgZone} from '@angular/core';
import { isNullOrUndefined } from 'utils/types';
import * as firebase from 'nativescript-plugin-firebase';

import { Board, MenuItemName, Square, State } from "~/assets/domain";
import { Color } from "ui/page";
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout/stack-layout';
import { LeaderBoardService } from './leaderboard.service';
import { PopupService, UserService } from '~/assets/services';
import { Session } from '~/assets/domain/session';

@Injectable()
export class MultiPlayerService {
  public sessionGameWon: boolean = false;
  public board: Board = new Board(3);
  public session: Session = new Session();

  private SessionCollection = firebase.firestore.collection("sessions");
  public mpSubscription: any;

  public constructor(private popupService: PopupService, private zone: NgZone, private leaderBoard: LeaderBoardService) { }

  public restart(): void {
    this.newGame(0);
  }

  public mark(square: Square): void {
    if (square.canChangeState) {
      square.state = this.board.currentState;
      this.board.marksCount++;
      this.setGameWonStateFrom(square);
      this.board.changeCurrentState();
    }
  }

  public newGame(miliSeconds: number = 2000): void {
    setTimeout(() => {
      this.sessionGameWon = false;
      this.board.startNewGame();
    }, miliSeconds);
  }

  public createSessionAndGetSessionId(): Promise<any> {
    this.session = new Session();
    this.session.createSession(this.leaderBoard.getUserUid(), 'x');
    return this.SessionCollection.add(this.session)
      .then(documentRef => {
        this.setMPSub(documentRef.id);
        return documentRef.id;
      });
  }

  public joinSessionWithSessionId(id: string): Promise<any> {
    return this.SessionCollection.doc(id)
    .update({
      player2: this.leaderBoard.getUserUid()
    }).then(() => {
      this.setMPSub(id);
      console.log('session updated, player2 joined!');
    })
  }

  private setMPSub(id: string): void {
    if (!this.mpSubscription) {
      const query = this.SessionCollection.doc(id);
      this.mpSubscription = query.onSnapshot(doc => {
        this.getSession(id);
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
          this.popupService.toast('joining session');
        }
      } else {
        console.log('No session found!');
      }
    })
    .catch(error => console.log(`Error while fetching: ${error}`));
  }

  public get gamePanelStateImageVisibility(): string {
    return this.board.isDraw ? 'collapsed': 'visible';
  }
 
  public get gamePanelCaption(): string {
    if (this.board.isDraw) {
      return 'Draw';
    }
    return this.board.isGameWon ? 'Winner': 'Next';
  }

  private incrementWinnerScore(): void {
    if (this.board.currentState === State.Cross) {
      this.leaderBoard.mpScore.crossScore++;
      this.leaderBoard.updateMPScore();
    } else {
      this.leaderBoard.mpScore.circleScore++;
      this.leaderBoard.updateMPScore();
    }
  }

  private setGameWonStateFrom(square: Square): void {
    this.board.isGameWon = this.board.getWinningIndexesFor(square) != undefined;
    if (this.board.isGameWon)
      this.incrementWinnerScore();
  }
}