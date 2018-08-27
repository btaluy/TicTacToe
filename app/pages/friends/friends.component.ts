import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import { User } from "~/assets/domain";
import { isNullOrUndefined } from 'utils/types';
import { NavigationService, PopupService, AudioService, UserService, FriendsService } from "~/assets/services";
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
      private _popupService: PopupService
    ) { }

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

      public addFriendToList(item) {
        const friendFound = this.userService.user.friends.find(i => i.uid === item.uid);
        if(isNullOrUndefined(friendFound)) {
          this.friends.addFriend(item).then(() => {
            this._popupService.toast(`${item.name} is succesfully added to your friendslist.`);
            this._cd.detectChanges();
            });
        } else {
          this._popupService.toast(`${item.name} is already in your friendslist.`);
        }
      }

      public removeFriend(friend){
        this.friends.deleteFriend(friend);
        this._popupService.toast(`${friend.name} is no longer on your friendslist.`);
      }
        
}