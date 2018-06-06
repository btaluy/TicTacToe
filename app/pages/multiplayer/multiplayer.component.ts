import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from "@angular/core";
import * as platform from 'platform';
import { GridLayout } from 'ui/layouts/grid-layout';
import { StackLayout } from 'ui/layouts/stack-layout';
import { EventData } from 'data/observable';
import { Page, Color } from "ui/page";
import { MLKitScanBarcodesOnDeviceResult } from "nativescript-plugin-firebase/mlkit/barcodescanning";

import * as imgSource from "tns-core-modules/image-source";

import { NavigationService, PopupService, MultiPlayerService, AudioService } from "~/assets/services";
import { Board, MenuItemName, Square, State } from "~/assets/domain";
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

  public inCreateSession: boolean = false;
  public inJoinSession: boolean = false;
  public creatingQR: boolean = false;

  private barcodes: Array<{value: string; format: string;}>;

  constructor(
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
    this.inCreateSession = true;
    this.creatingQR = true;
    const zx = new ZXing();

    this.mpService.createSessionAndGetSessionId()
      .then((sessionId: string) => {
        const newImg = zx.createBarcode({encode: `{sessionGame: ${sessionId}}`, height: 300, width: 300, format: ZXing.QR_CODE});
        this.creatingQR = false;
        setTimeout(() => {
          this.img.nativeElement.imageSource = imgSource.fromNativeSource(newImg);
        });
      });
  }

  public joinSession(): void {
    this.inJoinSession = true;
  }

  public onScanningResult(event: any): void {
    const result: MLKitScanBarcodesOnDeviceResult = event.value;
    this.barcodes = result.barcodes;
    console.log('event: ', this.barcodes);
  }

  public back(): void {
    this.inCreateSession = false;
    this.inJoinSession = false;
  }

  public mark(square: Square): void {
    if (!this.mpService.sessionGameWon
        && this.mpService.board.currentState === State.Cross
        && square.state === State.Blank) {
      this.audioService.clickSound();
      this.mpService.mark(square);
      this.updateState(square);
    }
  }

  public newGame(miliSeconds: number = 2000): void {
    this.mpService.newGame(miliSeconds);
  }

  public get boardSideSpecification(): string {
    let specs = [];
    for (let i = 0; i < this.mpService.board.boardSize; i++) {
      specs.push('*');
    }
 
    return specs.join(',');
  }

  public get gamePanelStateImageVisibility(): string {
    return this.mpService.gamePanelStateImageVisibility;
  }
 
  public get gamePanelCaption(): string {
    return this.mpService.gamePanelCaption;
  }

  private updateState(square: Square): Promise<any> {
    return new Promise((resolve, reject) => {
      const winningIndexes: number[] = this.mpService.board.getWinningIndexesFor(square);

      if (winningIndexes) {
        this.mpService.sessionGameWon = true;

        for (let index of winningIndexes) {
          let view = this.squareViews[index];
          view.backgroundColor = new Color("#000000");
          view.animate({ backgroundColor: new Color("#BA4A00"), duration: 1000 });
        }
        
        resolve(this.newGame(2000));
      } else if (this.mpService.board.isDraw) {
        this.leaderBoard.spScore.drawScore++;
        this.leaderBoard.updateSPScore()
          .then(() => {
            resolve(this.newGame());
          });
      }
      resolve();
    });
  }

  private emptyIndexies(board: any[]): any[] {
    return board.filter(s => s != "O" && s != "X");
  }

  private get boardGridView(): GridLayout {
    return this.boardGrid.nativeElement;
  }

  private makeBoardGridSquared(): void {
    const heightOverflow = 120;
    const height = this.screenHeight - heightOverflow;
    const minimumSideDimension = Math.min(this.screenWidth, height);
    this.boardGridView.height = minimumSideDimension;
    this.boardGridView.width = minimumSideDimension;
  }

  private get screenWidth(): number {
    return platform.screen.mainScreen.widthDIPs;
  }
 
  private get screenHeight(): number {
    return platform.screen.mainScreen.heightDIPs;
  }

  private get squareViews(): Array<StackLayout> {
    return this.squares.map(s => s.nativeElement);
  }
}
