// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { enableProdMode } from "@angular/core";
import { platformNativeScript } from "nativescript-angular/platform-static";
import { AppModuleNgFactory } from "./app.module.ngfactory";
import { registerElement } from "nativescript-angular/element-registry";

registerElement("MLKitBarcodeScanner", () => require("nativescript-plugin-firebase/mlkit/barcodescanning").MLKitBarcodeScanner);

enableProdMode();

platformNativeScript().bootstrapModuleFactory(AppModuleNgFactory);
