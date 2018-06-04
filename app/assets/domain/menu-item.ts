export class MenuItem {

  public name: MenuItemName;
  public displayNameKey: string;
  public icon: string;
  public authorisation: MenuAuthorisation;
  public hasBadge: boolean = false;
  public badgeCount: number;

  public visible: boolean = false;

  public constructor(name: number,
                     displayNameKey: string,
                     icon: string,
                     authorisation: MenuAuthorisation,
                     hasBadge?: boolean) {
    this.name = name;
    this.displayNameKey = displayNameKey;
    this.icon = icon;
    this.authorisation = authorisation;

    if (hasBadge) {
      this.hasBadge = hasBadge;
      this.badgeCount = 0;
    }
  }

}

export enum MenuItemName {
  home = 0,
  singleplayer,
  login,
  leaderboard
}

export enum MenuAuthorisation {
  showAlways = 0,
  showWhenloggedIn,
  showWhenNotLoggedIn
}