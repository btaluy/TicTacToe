import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import firebase = require("nativescript-plugin-firebase");

import { NavigationService } from '~/assets/services';

import { MenuItemName } from '~/assets/domain';

@Injectable()
export class LoginGuard implements CanActivate {
  public constructor(
    private navigationService: NavigationService
  ) {}

  public canActivate(): boolean {
    /*return this.isUserLoggedIn()
      .then(message => {
        return true;
      })
      .catch(error => {
        console.log(error);
        this.navigationService.navigateToAndClearHistory(MenuItemName.login);
        return false;
      });*/
      return true;
  }

  /*private isUserLoggedIn(): Promise<any> {
    return new Promise((promise: any, reject: any) => {
      firebase.getCurrentUser()
      .then(() => {
        return promise('user logged in!');
      })
      .catch(() => {
        return reject('No user logged in!');
      })
    });
  }*/
}
