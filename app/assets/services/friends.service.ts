import { Injectable, NgZone } from '@angular/core';
import * as firebase from 'nativescript-plugin-firebase';
import {
  getBoolean, setBoolean, getNumber, setNumber,
  getString, setString, hasKey, remove, clear
} from "application-settings";

import { PopupService } from '~/assets/services';
import { UserService } from './user.service';
import { User, Friend } from '~/assets/domain';
import { beepOnScanProperty } from 'nativescript-plugin-firebase/mlkit/barcodescanning/barcodescanning-common';

@Injectable()
export class FriendsService {
  public user: User;
  //public email: 'janine@upcmail.nl' //User["email"];
  private usersCollection = firebase.firestore.collection("users");
  public users: User[] = [];
  public friend: Friend = new Friend();

  public constructor(private popupService: PopupService, private userService: UserService, private zone: NgZone) {
    
  }

  public getUsers(email): Promise<any> {
    console.log('Search on; ' + email);
    const query = this.usersCollection.where('email', '==', email)
    return query.get()
      .then(querySnapshot => {
        this.users = [];
        querySnapshot.forEach(doc => {
    
          this.users.push(User.fromObject(doc.data()));
          
          console.log(this.users);
        });
      });
  }

  public addFriend(UID): Promise<any> {
    const query = this.usersCollection.doc(this.userService.user.uid);
    return query.get()
      .then(doc => {
        if(!doc.exists) {
          this.friend.email = 'robert@bekcomp.nl';//this.userService.user;
          query.set(this.friend.email);
        }

      //  this.setMPSub();
      }); 
  }

  /*public setNewMPScore(): Promise<any> {
    const query = this.mpLeaderboardCollection.doc(this.userService.user.uid);

    return query.get()
      .then(doc => {
        if(!doc.exists) {
          this.mpScore.player = this.userService.user.name;
          query.set(this.mpScore);
        }

        this.setMPSub();
      }); 
  }*/
  
}