import { Injectable, NgZone } from '@angular/core';
import * as firebase from 'nativescript-plugin-firebase';
import {
  getBoolean, setBoolean, getNumber, setNumber,
  getString, setString, hasKey, remove, clear
} from "application-settings";

import { PopupService } from '~/assets/services';
import { UserService } from './user.service';
import { empty } from 'rxjs';
import { Friend } from '~/assets/domain';

@Injectable()
export class FriendsService {
  public friend: Friend;
  private UserCollection = firebase.firestore.collection("users");
  private userNames = this.userNames;

  public constructor(private popupService: PopupService, private userService: UserService, private zone: NgZone) {
  }

  public getUsers() {
    var query = this.UserCollection.where("name", "==", !empty);
    return query;
  }

  public showUsers(getUsers) {
      this.userNames = getUsers.query.name;
      return this.userNames;
  }


}