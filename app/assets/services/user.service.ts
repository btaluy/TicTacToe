import { Injectable } from '@angular/core';
import * as firebase from 'nativescript-plugin-firebase';

import { User } from '~/assets/domain';

@Injectable()
export class UserService {
  public user: User;

  public setUser(userObject: any) {
    this.user = User.fromObject(userObject);
    firebase.setValue(`/users/${this.user.uid}`, this.user);
  }
}