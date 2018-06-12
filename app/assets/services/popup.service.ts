import { Injectable } from '@angular/core';
import { LoadingIndicator } from 'nativescript-loading-indicator';
import * as Toast from 'nativescript-toast';
import * as dialogs from 'ui/dialogs';

@Injectable()
export class PopupService {

  private loader: LoadingIndicator = null;
  private defaultTimeout: number = 200;
  private waitingLoader: any;
  private loadingOptions: any = {
    message: 'TBD',
    progress: 0.65,
    android: {
      indeterminate: true,
      cancelable: false,
      max: 100,
      progressNumberFormat: '%1d/%2d',
      progressPercentFormat: 0.53,
      progressStyle: 1,
      secondaryProgress: 1
    },
    ios: {
      square: false,
      margin: 20,
      dimBackground: true,
      color: 'black',
      backgroundColor: 'white'
    }
  };

  public constructor() { }

  public loading(text: string = '', timeout: number = this.defaultTimeout) {
    this.hideLoading();
    if (this.loader !== null) {
      console.warn('Loader is not yet hidden!!');
      return;
    }

    this.loadingOptions.message = text;
    this.loader = new LoadingIndicator();
    this.waitingLoader = setTimeout(() => {
        this.loader.show(this.loadingOptions);
    }, timeout);
  }

  public hideLoading() {
    if (this.loader) {
      clearTimeout(this.waitingLoader);
      this.loader.hide();
      this.loader = null;
    }
  }

  public alert(title: string, text: string, textOK?: string) {
    return dialogs.alert({
      title: title,
      message: text,
      okButtonText: (textOK || 'ok')
    });
  }

  public error(text: string, textOK?: string): Promise<void> {
    return dialogs.alert({
      title: ('error'),
      message: text,
      okButtonText: (textOK || 'ok')
    });
  }

  public confirm(
    title: string,
    text: string,
    textOK?: string,
    textCancel?: string,
    interpolateParams?: Object): Promise<boolean> {
    return dialogs.confirm({
      title: title,
      message: text,
      okButtonText: (textOK || 'ok'),
      cancelButtonText: (textCancel || 'cancel')
    });
  }

  public prompt(title: string, text: string, textOK?: string, textCancel?: string): Promise<any> {
    return dialogs.prompt({
      title: title,
      message: text,
      okButtonText: (textOK || 'ok'),
      cancelButtonText: (textCancel || 'cancel'),
      // neutralButtonText: "",
      // defaultText: "",
      inputType: dialogs.inputType.text
    });
  }

  // Toast displays a small message for about 2 seconds. It automatically disappears
  //
  public toast(text: string): void {
    Toast.makeText(text).show();
  }
}