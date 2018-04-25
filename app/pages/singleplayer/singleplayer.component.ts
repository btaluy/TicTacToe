import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from "@angular/core";
import * as platform from 'platform';
import { GridLayout } from 'ui/layouts/grid-layout';
import { StackLayout } from 'ui/layouts/stack-layout';
import { EventData } from 'data/observable';
import { Page, Color } from "ui/page";

import { NavigationService, PopupService, SinglePlayerService } from "~/assets/services";
import { MenuItemName } from "~/assets/domain";
import { Board, Square } from "~/assets/domain";

@Component({
    selector: "Singleplayer",
    moduleId: module.id,
    templateUrl: "./singleplayer.component.html"
})
export class SinglePlayerComponent implements OnInit {
  @ViewChild('boardGrid') public boardGrid: ElementRef;
  @ViewChildren('square') squares: QueryList<ElementRef>;

  public board: Board = new Board(3);

  constructor(
    private _page: Page,
    private _navigationService: NavigationService,
    private _popupService: PopupService,
    private _singlePlayerService: SinglePlayerService
  ) { }

  ngOnInit(): void {
    this._page.actionBarHidden = true;
    this.makeBoardGridSquared();
  }

  public mark(square): void {
    this.board.mark(square);
    const winningIndexes = this.board.getWinningIndexesFor(square);

    if (winningIndexes) {
      for (let index of winningIndexes) {
        let view = this.squareViews[index];
        view.animate({ backgroundColor: new Color("#BA4A00"), duration: 2000 });
      }
    }
  }

  public get boardSideSpecification(): string {
    let specs = [];
    for (let i = 0; i < this.board.boardSize; i++) {
      specs.push('*');
    }
 
    return specs.join(',');
  }

  public classOf(square: Square): string {
    return (square.xPosition + square.yPosition) % 2 == 0 ? 'light-square' : 'dark-square';
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
