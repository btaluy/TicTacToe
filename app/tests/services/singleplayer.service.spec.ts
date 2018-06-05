import { Injector} from '@angular/core';
import { SinglePlayerService } from '~/assets/services';
import { Square } from '~/assets/domain';

describe('The SinglePlayerService', () => {
  let injector: Injector;
  let singlePlayerService: SinglePlayerService;

  beforeEach(() => {
    injector = Injector.create({
      providers: [
        {
          provide: SinglePlayerService,
          useClass: SinglePlayerService,
          deps: []
        }
      ]
    });

    singlePlayerService = injector.get(SinglePlayerService);
  });

  it('should restart the game.', () => {
    singlePlayerService.sessionGameWon = true;
    singlePlayerService.restart();
    setTimeout(() => {
      expect(singlePlayerService.sessionGameWon).toBeFalsy();
    }, 4000);
  });
  
  it('should show the gamePanelState', () => {
    expect(singlePlayerService.gamePanelStateImageVisibility).toBe('visible');
  });

  it('should start a new game and let x win the game', () => {
    singlePlayerService.board.startNewGame();
    
    // x starts to set the first tile.
    singlePlayerService.mark(new Square(0, 0, ''));

    // o starts to set the fourth tile
    singlePlayerService.mark(new Square(1, 0, ''));

    // x starts to set the second tile
    singlePlayerService.mark(new Square(0, 1, ''));

    // o starts to set the fifth tile
    singlePlayerService.mark(new Square(1, 1, ''));

    // x starts to set the third tile
    singlePlayerService.mark(new Square(0, 2, ''));

    setTimeout(() => {
      expect(singlePlayerService.board.isGameWon).toBeTruthy();
      expect(singlePlayerService.gamePanelCaption).toBe('Winner');
    }, 2000);
  });
});

