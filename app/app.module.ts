import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CommonServicesModule } from "~/assets/services/common-services.module";
import { LoginGuard } from "~/assets/guards/login-guard.service";

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
    providers: [
      LoginGuard
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
