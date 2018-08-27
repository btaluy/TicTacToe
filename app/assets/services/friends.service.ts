import { Injectable, NgZone } from '@angular/core';
import * as firebase from 'nativescript-plugin-firebase';
import { PopupService } from '~/assets/services';
import { UserService } from './user.service';
import { User, Friend } from '~/assets/domain';

@Injectable()
export class FriendsService {
  public user: User;
  private usersCollection = firebase.firestore.collection("users");
  public users: Friend[] = [];
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
          this.users.push(Friend.fromObject(doc.data()));
          console.log(this.users);
        });
      });
  }

  public addFriend(friend: Friend): Promise<any> {
    const query = this.usersCollection.doc(this.userService.user.uid);
    return query.get()
      .then(doc => {
        if(doc.exists) {
          console.log('We have found the user and are now adding the item to it.');
          this.userService.user.friends.push(friend); 
          query.update({friends: this.userService.user.friends});
        }
      }); 
  }

  public deleteFriend(friend) {
    const user = this.usersCollection.doc(this.userService.user.uid);
    return user.get()
    .then(doc => {
      if(doc.exists) {
        const index: number = this.userService.user.friends.indexOf(friend);
        if (index !== -1) {
          console.log('We have found your friend and deleted this one.');
          this.userService.user.friends.splice(index, 1);
          user.update({friends: this.userService.user.friends});
        }   
      }
    }); 
  }

}

