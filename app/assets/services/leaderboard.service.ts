import { Injectable, NgZone } from '@angular/core';
import * as firebase from 'nativescript-plugin-firebase';

import { User, Score } from '~/assets/domain';
import { PopupService, UserService, SinglePlayerService } from '~/assets/services';

@Injectable()
export class LeaderBoardService {
  private spLeaderboardCollection = firebase.firestore.collection("spleaderboard");
  private mpLeaderboardCollection = firebase.firestore.collection("mpleaderboard");

  private spSubscription: any;
  private mpSubscription: any;

  public constructor(
    private popupService: PopupService,
    private spService: SinglePlayerService,
    private userService: UserService,
    private zone: NgZone) {}

  public updateSPScore(): Promise<any> {
    const user = this.userService.user;
    const board = this.spService.board;
    const query = this.spLeaderboardCollection.doc(user.uid);

    return query.get()
      .then(doc => {
        if(doc.exists) {
          // if the query returns a doc, only higher the score of the person that won/draw the game.
          console.log(doc.data());
          /*query.update({
            
          });*/
        }
      });
  }

  public updateMPScore(): Promise<any> {
    const user = this.userService.user;
    const query = this.mpLeaderboardCollection.doc(user.uid);

    return query.get()
      .then(doc => {
        if(doc.exists) {
          // if the query returns a doc, only higher the score of the person that won/draw the game.
        } else {
          // if no doc has been found then the user is a fresh person and his/her score should be inserted into the leaderBoard
        }
      });
  }

  public setNewSPScore(): Promise<any> {
    const user = this.userService.user;
    const board = this.spService.board;
    const query = this.spLeaderboardCollection.doc(user.uid);

    return query.get()
      .then(doc => {
        if(!doc.exists) {
          query.set(board.score);
        }
      });
  }

  public setNewMPScore(): void {
    const user = this.userService.user;
    const query = this.spLeaderboardCollection.doc(user.uid);
    
  }
}