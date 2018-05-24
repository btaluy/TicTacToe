import { Injectable } from '@angular/core';
import {
  on as applicationOn,
  suspendEvent,
  resumeEvent,
  ApplicationEventData
} from "application";

@Injectable()
export class ApplicationLifecycle {

  public initialise(): void {
    applicationOn(suspendEvent, (args: ApplicationEventData) => {
      if (args.android) { }
    });
    
    applicationOn(resumeEvent, (args: ApplicationEventData) => {
        if (args.android) { }
    });
  }
}