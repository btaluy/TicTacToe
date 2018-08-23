import { Injectable, NgZone } from '@angular/core';
import * as firebase from 'nativescript-plugin-firebase';
import {
  getBoolean, setBoolean, getNumber, setNumber,
  getString, setString, hasKey, remove, clear
} from "application-settings";

import { User, Score } from '~/assets/domain';
import { PopupService } from '~/assets/services';
import { UserService } from './user.service';

@Injectable()
export class LeaderBoardService {
  public spScore: Score = new Score();
  public mpScore: Score = new Score();
  public top10Players: Score[] = [];

  private spSubscription: boolean;
  private mpSubscription: boolean;
  private spLeaderboardCollection = firebase.firestore.collection("spleaderboard");
  private mpLeaderboardCollection = firebase.firestore.collection("mpleaderboard");

  public constructor(private popupService: PopupService, private userService: UserService, private zone: NgZone) {
  }

  public getSPScore(): Promise<any> {
    const query = this.spLeaderboardCollection.doc(this.userService.user.uid);
    return query.get()
      .then((doc: any) => {
        if (doc.exists) {
          this.spScore = Score.fromObject(doc.data());
        } else {
          console.log('No score found!');
        }
      })
      .catch(error => console.log(`Error while fetching: ${error}`));
  }

  public getMPScore(): Promise<any> {
    const query = this.mpLeaderboardCollection.doc(this.userService.user.uid);
    return query.get()
      .then((doc: any) => {
        if (doc.exists) {
          this.mpScore = Score.fromObject(doc.data());
        } else {
          console.log('No score found!');
        }
      })
      .catch(error => console.log(`Error while fetching: ${error}`));
  }

  public updateSPScore(): Promise<any> {
    const query = this.spLeaderboardCollection.doc(this.userService.user.uid);

    return query.update(this.spScore)
            .then(() => console.log('Score updated!'))
            .catch(error => console.log(`Could not update score: ${error}`));
  }

  public updateMPScore(): Promise<any> {
    const query = this.mpLeaderboardCollection.doc(this.userService.user.uid);

    return query.update(this.mpScore)
            .then(() => console.log('Score updated!'))
            .catch(error => console.log(`Could not update score: ${error}`));
  }

  public setNewSPScore(): Promise<any> {
    const query: firebase.firestore.DocumentReference = this.spLeaderboardCollection.doc(this.userService.user.uid);

    return query.get()
      .then(doc => {
        if(!doc.exists) {
          this.spScore.player = this.userService.user.name;
          query.set(this.spScore);
        }

        this.setSPSub();
      });
  }

  public setNewMPScore(): Promise<any> {
    const query = this.mpLeaderboardCollection.doc(this.userService.user.uid);

    return query.get()
      .then(doc => {
        if(!doc.exists) {
          this.mpScore.player = this.userService.user.name;
          query.set(this.mpScore);
        }

        this.setMPSub();
      }); 
  }

  private setSPSub(): void {
    if (!this.spSubscription) {
      this.spSubscription = true;
      const query = this.spLeaderboardCollection.doc(this.userService.user.uid);
      query.onSnapshot(doc => {
        this.getSPScore();
      });
    }
  }

  private setMPSub(): void {
    if (!this.mpSubscription) {
      this.mpSubscription = true;
      const query = this.mpLeaderboardCollection.doc(this.userService.user.uid);
      query.onSnapshot(doc => {
        this.getMPScore();
      });
    }
  }

  public getUserUid(): string {
    return this.userService.user.uid;
  }

  public getTop10Players(): Promise<any> {
    const query = this.mpLeaderboardCollection
        .orderBy("wins", "desc")
        .limit(10);
    return query.get()
      .then(querySnapshot => {
        this.top10Players = [];
        querySnapshot.forEach(doc => {
          this.top10Players.push(Score.fromObject(doc.data()));
        });
      });
  }
}