"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("MLKitBarcodeScanner", function () { return require("nativescript-plugin-firebase/mlkit/barcodescanning").MLKitBarcodeScanner; });
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
