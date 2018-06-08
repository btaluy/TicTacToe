import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { AudioService, NavigationService, PopupService, SinglePlayerService, UserService, MultiPlayerService } from './index';
import { ApplicationLifecycle } from '~/assets/modules/application-lifecycle/application-lifecycle';
import { LeaderBoardService } from '~/assets/services/leaderboard.service';

@NgModule({})
export class CommonServicesModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonServicesModule,
      providers: [
        NavigationService,
        PopupService,
        SinglePlayerService,
        MultiPlayerService,
        AudioService,
        UserService,
        LeaderBoardService,
        ApplicationLifecycle
      ]
    };
  }

  public constructor(@Optional() @SkipSelf() parentModule: CommonServicesModule) {
    if (parentModule) {
      throw new Error('CommonServicesModule already loaded; Import in root module only.');
    }
  }
}