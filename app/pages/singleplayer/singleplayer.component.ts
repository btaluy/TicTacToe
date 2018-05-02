import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from "@angular/core";
import * as platform from 'platform';
import { GridLayout } from 'ui/layouts/grid-layout';
import { StackLayout } from 'ui/layouts/stack-layout';
import { EventData } from 'data/observable';
import { Page, Color } from "ui/page";

import { NavigationService, PopupService, SinglePlayerService } from "~/assets/services";
import { Board, MenuItemName, Square, State } from "~/assets/domain";

@Component({
    selector: "Singleplayer",
    moduleId: module.id,
    templateUrl: "./singleplayer.component.html"
})
export class SinglePlayerComponent implements OnInit {
  @ViewChild('boardGrid') public boardGrid: ElementRef;
  @ViewChildren('square') squares: QueryList<ElementRef>;

  constructor(
    public spService: SinglePlayerService,
    private _page: Page,
    private _navigationService: NavigationService,
    private _popupService: PopupService
  ) { }

  ngOnInit(): void {
    this._page.actionBarHidden = true;
    this.makeBoardGridSquared();
  }

  public mark(square: Square): void {
    if (!this.spService.sessionGameWon && this.spService.board.currentState === State.Cross) {
      this.spService.clickSound();
      this.spService.board.mark(square);
      this.updateState(square)
        .then(() => {
          this.botMark();
        });
    }
  }

  public newGame(miliSeconds: number = 2000): void {
    this.spService.newGame(miliSeconds);
  }

  public get boardSideSpecification(): string {
    let specs = [];
    for (let i = 0; i < this.spService.board.boardSize; i++) {
      specs.push('*');
    }
 
    return specs.join(',');
  }

  public get gamePanelStateImageVisibility(): string {
    return this.spService.gamePanelStateImageVisibility;
  }
 
  public get gamePanelCaption(): string {
    return this.spService.gamePanelCaption;
  }

  public classOf(square: Square): string {
    return (square.xPosition + square.yPosition) % 2 == 0 ? 'light-square' : 'dark-square';
  }

  public restartDialog(): void {
    this._popupService.confirm('Restart', 'Are you sure you want to restart the game?', 'Yes', 'No')
      .then((result: any) => {
        if (result) {
          this.spService.restart();
        }
      });
  }

  private updateState(square: Square): Promise<any> {
    return new Promise((resolve, reject) => {
      const winningIndexes: number[] = this.spService.board.getWinningIndexesFor(square);

      if (winningIndexes) {
        this.spService.sessionGameWon = true;

        for (let index of winningIndexes) {
          let view = this.squareViews[index];
          view.animate({ backgroundColor: new Color("#BA4A00"), duration: 2000 });
        }
        
        resolve(this.newGame(4000));
      } else if (this.spService.board.isDraw) {
        resolve(this.newGame());
      }
      resolve();
    });
  }

  private botMark(): void {
    const foundSquare: Square =
            this.spService.board.getEmptySquares().length > 0 ? this.spService.foundSquare : undefined;
    if (foundSquare &&!this.spService.sessionGameWon) {
      setTimeout(() => {
        this.spService.clickSound();
        this.spService.board.mark(foundSquare);
        this.updateState(foundSquare);
      }, 1000);
    }
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
