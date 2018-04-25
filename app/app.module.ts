import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CommonServicesModule } from "~/assets/services/common-services.module";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
      AppComponent
    ],
    imports: [
        CommonServicesModule.forRoot(),
        NativeScriptModule,
        AppRoutingModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
