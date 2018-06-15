import { Injector, ChangeDetectorRef} from '@angular/core';
import { Page } from 'ui/page';

import { AudioService, NavigationService, PopupService, UserService } from '~/assets/services';
import { HomeComponent } from '../../pages/home/home.component';

import { mockService } from '../utils/mock.util';
import { MenuItemName } from '~/assets/domain';

let injector: Injector;
let homeComponent: HomeComponent;
let navigationService: NavigationService;
let audioService: AudioService;
let userService: UserService
let page: any;
let popupService: PopupService;
let cd: any;

describe('HomeComponent tests', () => {

  class MockChangeDetectorRef {
    public detectChanges(): void {
    }
  }

  beforeEach(() => {
    injector = Injector.create({
      providers: [
        {
          provide: ChangeDetectorRef,
          useClass: MockChangeDetectorRef,
          deps: []
        },
        mockService(NavigationService, ['navigateTo', 'navigateToAndClearHistory']),
        mockService(PopupService, ['loading', 'hideLoading', 'toast']),
        mockService(Page, ['on']),
        mockService(UserService),
        mockService(AudioService, ['clickSound'])
      ]
    });

    navigationService = injector.get(NavigationService);
    popupService = injector.get(PopupService);
    page = injector.get(Page);
    userService = injector.get(UserService);
    audioService = injector.get(AudioService);
    cd = injector.get(ChangeDetectorRef);

    homeComponent = new HomeComponent(
      audioService,
      userService,
      page,
      navigationService,
      popupService,
      cd);
      
      page.on.and.returnValue();
      homeComponent.ngOnInit();
  });

  describe('When the component is initialized', () => {
    it('should have hidden the actionbar', () => {
      expect(page.actionBarHidden).toBeTruthy();
    });
  });

  describe('When clicked on one of the buttons', () => {
    it('should route you to the singleplayer page', () => {
      homeComponent.goToSP();
      expect(audioService.clickSound).toHaveBeenCalled();
      expect(navigationService.navigateTo).toHaveBeenCalledWith(MenuItemName.singleplayer);
    });
    
    it('should route you to the multiplayer page', () => {
      homeComponent.goToMP();
      expect(audioService.clickSound).toHaveBeenCalled();
      expect(navigationService.navigateTo).toHaveBeenCalledWith(MenuItemName.multiplayer);
    });

    it('should route you to the leaderboard page', () => {
      homeComponent.goToLB();
      expect(audioService.clickSound).toHaveBeenCalled();
      expect(navigationService.navigateTo).toHaveBeenCalledWith(MenuItemName.leaderboard);
    });
  });
});



