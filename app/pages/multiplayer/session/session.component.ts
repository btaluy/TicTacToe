import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from "@angular/core";
import { Subscription } from "rxjs";
import * as platform from 'platform';
import { GridLayout } from 'ui/layouts/grid-layout';
import { StackLayout } from 'ui/layouts/stack-layout';
import { EventData } from 'data/observable';
import { Page, Color } from "ui/page";

import { NavigationService, PopupService, MultiPlayerService, AudioService } from "~/assets/services";
import { Board, MenuItemName, Square, State } from "~/assets/domain";
import { LeaderBoardService } from "~/assets/services/leaderboard.service";
import { isNullOrUndefined } from "tns-core-modules/utils/types";
import { Session } from "~/assets/domain/session";


@Component({
    selector: "Session",
    moduleId: module.id,
    templateUrl: "./session.component.html"
})
export class SessionComponent implements OnInit {
  @ViewChild('boardGrid') public boardGrid: ElementRef;
  @ViewChildren('square') squares: QueryList<ElementRef>;

  private subScribedSession: Subscription;

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
    this.mpService.isJoiningGame = false;
    this.makeBoardGridSquared();

    this.subScribedSession = this.mpService.isSessionUpdated.subscribe(
      (session: Session) => {
        const square = this.mpService.findLastPlayedSquare();
        this.updateState(square);
      }
    )
  }

  public ngOnDestroy(): void {
    if (this.subScribedSession && !this.subScribedSession.closed) {
      this.subScribedSession.unsubscribe();
    }
  }

  public mark(square: Square): void {
    if (!this.mpService.sessionGameWon
        && this.mpService.session.board.currentState === this.mpService.playerState
        && square.state === State.Blank) {
      this.audioService.clickSound();
      this.mpService.mark(square);
    }
  }

  public newGame(miliSeconds: number = 2000): void {
    this.mpService.newGame(miliSeconds);
  }

  public get boardSideSpecification(): string {
    let specs = [];
    for (let i = 0; i < this.mpService.session.board.boardSize; i++) {
      specs.push('*');
    }
 
    return specs.join(',');
  }

  private updateState(square: Square): Promise<any> {
    return new Promise((resolve, reject) => {
      if(isNullOrUndefined(square)) {
        return resolve();
      }

      const winningIndexes: number[] = this.mpService.session.board.getWinningIndexesFor(square);

      if (winningIndexes) {
        this.mpService.sessionGameWon = true;

        for (let index of winningIndexes) {
          let view = this.squareViews[index];
          view.backgroundColor = new Color("#000000");
          view.animate({ backgroundColor: new Color("#BA4A00"), duration: 1000 });
        }
        return resolve();
      } else if (this.mpService.session.board.isDraw) {
        this.leaderBoard.spScore.drawScore++;
        this.leaderBoard.updateMPScore();
      }
      return resolve();
    });
  }

  public get gamePanelStateImageVisibility(): string {
    return this.mpService.gamePanelStateImageVisibility;
  }
 
  public get gamePanelCaption(): string {
    return this.mpService.gamePanelCaption;
  }

  private emptyIndexies(board: any[]): any[] {
    return board.filter(s => s != "O" && s != "X");
  }

  private get squareViews(): Array<StackLayout> {
    return this.squares.map(s => s.nativeElement);
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
}
