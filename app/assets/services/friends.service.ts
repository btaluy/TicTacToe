import { Injectable, NgZone } from '@angular/core';
import * as firebase from 'nativescript-plugin-firebase';
import {
  getBoolean, setBoolean, getNumber, setNumber,
  getString, setString, hasKey, remove, clear
} from "application-settings";

import { PopupService } from '~/assets/services';
import { UserService } from './user.service';
import { empty } from 'rxjs';
import { Friend, User } from '~/assets/domain';

@Injectable()
export class FriendsService {
  public user: User[] = [];
  public friend: Friend;

  private usersCollection = firebase.firestore.collection("users");

  public constructor(private popupService: PopupService, private userService: UserService, private zone: NgZone) {
  }

  public getUsers(): Promise<any> {
    const query = this.usersCollection
        .limit(10);

    return query.get()
      .then(querySnapshot => {
        this.user = [];
        querySnapshot.forEach(doc => {
          this.user.push(User.fromObject(doc.data()));
        });
      });
  }

}