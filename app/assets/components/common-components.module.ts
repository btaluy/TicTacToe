import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { UserInterfaceComponent } from '~/assets/components/user-interface/user-interface.component';
import { UpdateLabelDirective } from "~/assets/components/update-label/update-label";
import { FonticonPipe } from './pipes/fonticon.pipe';
import { StatePipe } from "./pipes/state.pipe";

@NgModule({
    imports: [
        NativeScriptCommonModule
    ],
    declarations: [
      // Components
      UserInterfaceComponent,

      // Directives
      UpdateLabelDirective,

      // Pipes
      FonticonPipe,
      StatePipe
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
      UserInterfaceComponent,
      UpdateLabelDirective,
      FonticonPipe,
      StatePipe
    ]
})
export class CommonComponentsModule { }
