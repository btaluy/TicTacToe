import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import { User } from "~/assets/domain";
import * as firebase from 'nativescript-plugin-firebase';

import { NavigationService, PopupService, AudioService, UserService, FriendsService } from "~/assets/services";
import { setTimeout } from "timer";
import { ScrollEventData } from "ui/scroll-view";
import { TextField } from "ui/text-field";



@Component({
    selector: "friends",
    moduleId: module.id,
    providers: [User],
    templateUrl: "./friends.component.html"
})
export class FriendsComponent implements OnInit {
  public selectedIndex: number;

    constructor(
      public audioService: AudioService,
      public userService: UserService,
      public friends: FriendsService,
      private _page: Page,
      private _navigationService: NavigationService,
      private _cd: ChangeDetectorRef,
      private _user: User,

    ) { }
  

    public status = "not scrolling";

    public onScroll(args: ScrollEventData) {
        this.status = "scrolling";
        setTimeout(() => {
            this.status = "not scrolling";
        }, 300);

        console.log("scrollX: " + args.scrollX);
        console.log("scrollY: " + args.scrollY);
    }

    ngOnInit(): void {
        this._page.actionBarHidden = true;
        this._cd.detectChanges();
      }
      
      public firstTx: string = "";

      public onTextChange(args) {
        let textField = <TextField>args.object;
        this.firstTx = textField.text;
        console.log(this.firstTx);
      }

      public onReturn(){
        console.log('onReturn functie')
        this.friends.getUsers(this.firstTx)
        .then(() => {
        this._cd.detectChanges();
        });
      }

      public onItemTap(item) {
        console.log("------------------------ ItemTapped: " + item);
        /*this.friends.addFriend(args.name)
        .then(() => {
          this._cd.detectChanges();
          });*/
      }
        
}