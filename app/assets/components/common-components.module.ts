import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";

import { UserInterfaceComponent } from '~/assets/components/user-interface/user-interface.component';
import { UpdateLabelDirective } from "~/assets/components/update-label/update-label";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TNSFontIconModule.forRoot({
          'fa': './fonts/font-awesome.css',
        })
    ],
    declarations: [
        UserInterfaceComponent,
        UpdateLabelDirective
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
      UserInterfaceComponent,
      UpdateLabelDirective
    ]
})
export class CommonComponentsModule { }
