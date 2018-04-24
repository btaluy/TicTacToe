import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as platform from 'platform';
import { GridLayout } from 'ui/layouts/grid-layout';
import { EventData } from 'data/observable';
import { Page } from "ui/page";
import { NavigationService, PopupService, SinglePlayerService } from "~/services";
import { MenuItemName } from "~/domain";

@Component({
    selector: "Singleplayer",
    moduleId: module.id,
    templateUrl: "./singleplayer.component.html"
})
export class SinglePlayerComponent implements OnInit {
  @ViewChild('boardGrid') public boardGrid: ElementRef;
  
  public activePlayer: string = 'player - x';
  public squareDigits: number[] = [1, 2, 4, 8, 16, 32, 64, 128, 256];
  
  private _player: string = 'x';
  private _scores: any = { x: { score: 0, index: []}, o: { score: 0, index: []}};
  private _turns: number = 0;
  private _buttons: any[] = [];
  
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
  
  public toggleTile(args: EventData): void {
    this._turns++;
    this.activePlayer = `player - ${this._player === 'x' ? 'o' : 'x'}`;

    const button = args.object;
    button.set('text', this._player.toUpperCase());
    button.set('isEnabled', false);
    this._buttons.push(button);

    this._scores[this._player].score = this._scores[this._player].score + parseInt(button.get('score'));
    this._scores[this._player].index.push(parseInt(button.get('score')));

    if (SinglePlayerService.checkWins(this._scores[this._player].score)) {
        console.log(JSON.stringify(this._scores[this._player]));
        this._popupService.toast(`Player: ${this._player.toUpperCase()} has won the match, resetting the game...`);
        this.resetGame();
    } else if (this._turns === 9) {
      this._popupService.toast('Game is a tie, resetting the game...');
      this.resetGame();
    }

    this._player = this._player === 'o' ? 'x' : 'o';
    this._singlePlayerService.clickSound();
  }

  private resetGame(): void {
    this._player = 'o';

    setTimeout(() => {  
      this.activePlayer = 'player - x';
      this._scores = { x: { score: 0, index: []}, o: { score: 0, index: []}};
      this._turns = 0;
  
      if(this._buttons.length > 0) {
        this._buttons.forEach(button => {
          button.set('text', '');
          button.set('isEnabled', true);
        });
  
        this._buttons = [];
      }
    }, 1000);
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
