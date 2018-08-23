import { Injectable, NgZone } from '@angular/core';
import * as firebase from 'nativescript-plugin-firebase';
import {
  getBoolean, setBoolean, getNumber, setNumber,
  getString, setString, hasKey, remove, clear
} from "application-settings";

import { PopupService } from '~/assets/services';
import { UserService } from './user.service';
import { Friend, User } from '~/assets/domain';
import { beepOnScanProperty } from 'nativescript-plugin-firebase/mlkit/barcodescanning/barcodescanning-common';

@Injectable()
export class FriendsService {
  public user: User;
  public friend: Friend;
  public email: 'janine@upcmail.nl' //User["email"];
  private usersCollection = firebase.firestore.collection("users");
  public users: User[] = [];

  public constructor(private popupService: PopupService, private userService: UserService, private zone: NgZone) {
    
  }

  public getUsers(email): Promise<any> {
    console.log('getUsers' + email);
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
}