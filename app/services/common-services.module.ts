import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { NavigationService, PopupService, SinglePlayerService } from './index';

@NgModule({})
export class CommonServicesModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonServicesModule,
      providers: [
        NavigationService,
        PopupService,
        SinglePlayerService
      ]
    };
  }

  public constructor(@Optional() @SkipSelf() parentModule: CommonServicesModule) {
    if (parentModule) {
      throw new Error('CommonServicesModule already loaded; Import in root module only.');
    }
  }
}