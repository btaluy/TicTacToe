import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from "@angular/core";
import * as platform from 'platform';
import { GridLayout } from 'ui/layouts/grid-layout';
import { StackLayout } from 'ui/layouts/stack-layout';
import { EventData } from 'data/observable';
import { Page, Color } from "ui/page";
import { MLKitScanBarcodesOnDeviceResult } from "nativescript-plugin-firebase/mlkit/barcodescanning";

import * as imgSource from "tns-core-modules/image-source";

import { NavigationService, PopupService, MultiPlayerService, AudioService } from "~/assets/services";
import { Board, MenuItemName, Square, State, MenuItem } from "~/assets/domain";
import { LeaderBoardService } from "~/assets/services/leaderboard.service";
import { Image } from "tns-core-modules/ui/image/image";
import { Session } from "~/assets/domain/session";

const ZXing = require('nativescript-zxing');
@Component({
    selector: "Multiplayer",
    moduleId: module.id,
    templateUrl: "./multiplayer.component.html"
})
export class MultiPlayerComponent implements OnInit {
  @ViewChild('boardGrid') public boardGrid: ElementRef;
  @ViewChild('img') public img: ElementRef;
  @ViewChildren('square') squares: QueryList<ElementRef>;

  public creatingQR: boolean = false;
  
  private barcodes: Array<{value: string; format: string;}>;

  public constructor(
    public mpService: MultiPlayerService,
    public audioService: AudioService,
    public leaderBoard: LeaderBoardService,
    private _page: Page,
    private _navigationService: NavigationService,
    private _popupService: PopupService
  ) { }

  ngOnInit(): void {
    this._page.actionBarHidden = true;
  }

  public createSession(): void {
    this.mpService.inCreateSession = true;
    this.creatingQR = true;
    const zx = new ZXing();

    this.mpService.createSessionAndGetSessionId()
      .then((sessionId: string) => {
        const newImg = zx.createBarcode({encode: `sessionGame/${sessionId}`, height: 300, width: 300, format: ZXing.QR_CODE});
        this.creatingQR = false;
        setTimeout(() => {
          this.img.nativeElement.imageSource = imgSource.fromNativeSource(newImg);
          this.mpService.sessionGameWon = false;
          this.mpService.session.isGameOver = false;
        });
      });
  }

  public joinSession(): void {
    this.mpService.inJoinSession = true;
  }

  public onScanningResult(event: any): void {
    const result: MLKitScanBarcodesOnDeviceResult = event.value;
    this.barcodes = result.barcodes;
    if (this.barcodes.length > 0) {
      const val = this.barcodes[0].value.split('/');
      if(val && val[0] === 'sessionGame') {
        this.mpService.isJoiningGame = false;
        this.mpService.sessionGameWon = false;
        this.mpService.session.board.isGameWon = false;
        this.mpService.session.isGameOver = false;

        this.mpService.joinSessionWithSessionId(val[1])
          .then(() => {
            console.log('Found a session, joining the session now!');
            if (!this.mpService.isJoiningGame) {
              this.mpService.isJoiningGame = true;
              this._navigationService.navigateToAndClearHistory(MenuItemName.mpSession)
                .then(() => this.mpService.clearSession());
            }
          })
          .catch(error => {
            console.log('Oeh oh, something went wrong: ', error);
            this.mpService.isJoiningGame = false;
            this.mpService.isJoiningASession = false;
          });
      } else {
        console.log('Something went wrong while scanning.');
      }
    }
  }

  public back(): void {
    this.mpService.inCreateSession = false;
    this.mpService.inJoinSession = false;
    this.mpService.mpSubscription = undefined;
  }

  private get screenWidth(): number {
    return platform.screen.mainScreen.widthDIPs;
  }
 
  private get screenHeight(): number {
    return platform.screen.mainScreen.heightDIPs;
  }
}
