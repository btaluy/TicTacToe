import { Component, OnInit } from "@angular/core";
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
  public activePlayer: string = 'player - x';

  private _player: string = 'x';
  private _scores: any = {x: 0, o: 0};
  private _turns: number = 0;
  private _buttons: any[] = [];
  
  constructor(
    private _page: Page,
    private _navigationService: NavigationService,
    private _popupService: PopupService,
    private _singlePlayerService: SinglePlayerService
  ) { }

  ngOnInit(): void {
      // Init your component properties here.
      this._page.actionBarHidden = true;
  }
  
  public toggleTile(args: EventData): void {
    this._turns++;
    this.activePlayer = `player - ${this._player === 'x' ? 'o' : 'x'}`;

    const button = args.object;
    button.set('text', this._player.toUpperCase());
    button.set('isEnabled', false);
    this._buttons.push(button);

    this._scores[this._player] = this._scores[this._player] + parseInt(button.get('score'));

    if (SinglePlayerService.checkWins(this._scores[this._player])) {
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
    this.activePlayer = 'player - x';
    this._scores = {x: 0, o: 0};
    this._turns = 0;

    if(this._buttons.length > 0) {
      this._buttons.forEach(button => {
        button.set('text', '');
        button.set('isEnabled', true);
      });

      this._buttons = [];
    }
  }
}
