import { Injectable, NgZone } from '@angular/core';
import * as firebase from 'nativescript-plugin-firebase';
import {
  getBoolean, setBoolean, getNumber, setNumber,
  getString, setString, hasKey, remove, clear
} from "application-settings";

import { PopupService } from '~/assets/services';
import { UserService } from './user.service';
import { Friend, User } from '~/assets/domain';

@Injectable()
export class FriendsService {
  public user: User;
  public friend: Friend;
  public email: User["email"];
  private usersCollection = firebase.firestore.collection("users");

  public constructor(private popupService: PopupService, private userService: UserService, private zone: NgZone) {
    
  }

  public getUsers(): Promise<any> {
    const query = this.usersCollection.doc();
    return query.get()
      .then(snapshot => {
        if (snapshot.exists) {
          snapshot.forEach(doc => {
            console.log(doc.email);
          })
          //this.user = User.fromObject(snapshot.data());
          
        } else {
          console.log('No users found!');
        }
      })
      .catch(error => console.log(`Error while fetching: ${error}`));
  }

  public searchFriend(email) {

  }
}