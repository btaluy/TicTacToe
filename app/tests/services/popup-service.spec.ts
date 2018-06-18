import 'reflect-metadata';
import { Injector } from '@angular/core';
import { LoadingIndicator } from 'nativescript-loading-indicator';

import { PopupService } from '~/assets/services/popup.service';
import { mockService, mockServiceCallFakeMethod } from '../utils/mock.util';

describe('PopupService tests', () => {
  let popupService: PopupService;
  let injector: Injector;
  let loadingIndicator: any;

  beforeEach(() => {
    injector = Injector.create({
      providers: [
        mockService(LoadingIndicator, ['show', 'hide']),
        {
          provide: PopupService,
          useClass: PopupService,
          deps: []
        }
      ]
    });

    popupService = injector.get(PopupService);
    loadingIndicator = injector.get(LoadingIndicator);
  });

  describe('When showing a loading popup ', () => {
    it('should show the given text', done => {
      spyOn(LoadingIndicator.prototype, 'show').and.callThrough();
      popupService.loading('show me!!', 0);

      setTimeout(() => { // wait briefly to let loading() handle its timeout
        expect(LoadingIndicator.prototype.show).toHaveBeenCalledWith(jasmine.objectContaining({message: 'show me!!'}));
        done();
      }, 0);
    });

    it('should not show the given text if the loading text is cleared before the default timeout', done => {
      spyOn(LoadingIndicator.prototype, 'show').and.callThrough();
      popupService.loading('loading text'); // default timeout is 20ms

      setTimeout(() => { // hide the loading box before it is shown
        popupService.hideLoading();
      }, 10);

      setTimeout(() => { // wait briefly to let loading() handle its timeout
        expect(LoadingIndicator.prototype.show).not.toHaveBeenCalled();
        done();
      }, 30);
    });
  });

  describe('When using dialogs ', () => {
    const dialogs = require('ui/dialogs');

    describe('And showing an alert ', () => {
      it('should show the given title, text and button text', () => {
        spyOn(dialogs, 'alert');
        popupService.alert('My Title', 'My Text', 'JustDoIt');

        expect(dialogs.alert).toHaveBeenCalledWith(jasmine.objectContaining({
          title: 'My Title',
          message: 'My Text',
          okButtonText: 'JustDoIt'
        }));
      });

      it('should show the given title, text and a default button text', () => {
        spyOn(dialogs, 'alert');
        popupService.alert('My Title', 'My Text');

        expect(dialogs.alert).toHaveBeenCalledWith(jasmine.objectContaining({
          title: 'My Title',
          message: 'My Text',
          okButtonText: 'ok'
        }));
      });
    });

    describe('And showing an error ', () => {
      it('should show a fixed error title, custom text and button text', () => {
        spyOn(dialogs, 'alert');
        popupService.error('Some Error', 'Ack');

        expect(dialogs.alert).toHaveBeenCalledWith(jasmine.objectContaining({
          title: 'error',
          message: 'Some Error',
          okButtonText: 'Ack'
        }));
      });

      it('should show a fixed error title, custom text and default button text', () => {
        spyOn(dialogs, 'alert');
        popupService.error('Some Error');

        expect(dialogs.alert).toHaveBeenCalledWith(jasmine.objectContaining({
          title: 'error',
          message: 'Some Error',
          okButtonText: 'ok'
        }));
      });
    });

    describe('And showing an confirm dialog ', () => {
      it('should show a title, custom text and buttons text', () => {
        spyOn(dialogs, 'confirm');
        popupService.confirm('Confirm', 'Tell me', 'Yes', 'No');

        expect(dialogs.confirm).toHaveBeenCalledWith(jasmine.objectContaining({
          title: 'Confirm',
          message: 'Tell me',
          okButtonText: 'Yes',
          cancelButtonText: 'No'
        }));
      });

      it('should show a title, custom text and default button texts', () => {
        spyOn(dialogs, 'confirm');
        popupService.confirm('Confirm', 'Tell me');

        expect(dialogs.confirm).toHaveBeenCalledWith(jasmine.objectContaining({
          title: 'Confirm',
          message: 'Tell me',
          okButtonText: 'ok',
          cancelButtonText: 'cancel'
        }));
      });
    });

    describe('And showing an prompt dialog ', () => {
      it('should show a title, custom text and default button texts', () => {
        spyOn(dialogs, 'prompt');
        popupService.prompt('Prompt Title', 'Prompt Text');

        expect(dialogs.prompt).toHaveBeenCalledWith(jasmine.objectContaining({
          title: 'Prompt Title',
          message: 'Prompt Text',
          okButtonText: 'ok',
          cancelButtonText: 'cancel',
          inputType: dialogs.inputType.text
        }));
      });

      it('should show a title, custom text and buttons text', () => {
        spyOn(dialogs, 'prompt');
        popupService.prompt('Prompt Title', 'Prompt Text', 'Ja', 'Nee');

        expect(dialogs.prompt).toHaveBeenCalledWith(jasmine.objectContaining({
          title: 'Prompt Title',
          message: 'Prompt Text',
          okButtonText: 'Ja',
          cancelButtonText: 'Nee',
          inputType: dialogs.inputType.text
        }));
      });
    });
  });

  describe('When using Toast ', () => {
    const toast = require('nativescript-toast');

    class FakeToast {
      public show() {
      }
    }

    describe('And showing a toast message ', () => {
      it('should call the toast plugin with the given text', () => {
        const fakeToast = new FakeToast();
        spyOn(fakeToast, 'show');
        spyOn(toast, 'makeText').and.returnValue(fakeToast);

        popupService.toast('I bring a toast!');

        expect(toast.makeText).toHaveBeenCalled();
        expect(fakeToast.show).toHaveBeenCalled();
      });
    });
  });

});
