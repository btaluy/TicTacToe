import { Injectable, NgZone } from '@angular/core';
import * as firebase from 'nativescript-plugin-firebase';

import { User } from '~/assets/domain';
import { PopupService } from '~/assets/services';

@Injectable()
export class UserService {
  public user: User;
  private userCollection = firebase.firestore.collection("users");
  private subscription: boolean;

  constructor(private popupService: PopupService, private zone: NgZone) {}

  public setUser(userObject: any): Promise<any> {
    const user: User = User.fromObject(userObject);

    if (!this.subscription) {
      this.subscription = true;
      const query = this.userCollection.doc(user.uid);
      query.onSnapshot(doc => {
        this.setUserIfNotFound(user);
      });
    }

    return this.setUserIfNotFound(user);
  }

  private setUserIfNotFound(user: User): Promise<any> {
    const query = this.userCollection.doc(user.uid);

    return query.get()
      .then(doc => {
        if (!doc.exists) {
          query.set(user).then(() => {
            this.setUserIfNotFound(user);
          });
        } else {
          this.zone.run(() => {
            this.user = User.fromObject(doc.data());
            this.popupService.hideLoading();
          });
        }
      });
  }
}