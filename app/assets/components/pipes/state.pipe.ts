import { Pipe, PipeTransform } from '@angular/core';
import { State } from '../../domain';
 
@Pipe({ name: 'statePipe' })
export class StatePipe implements PipeTransform {
  transform(value: State): string  {
    switch (value) {
      case State.Circle:
        return 'fa-circle-thin';
      case State.Cross:
        return 'fa-times';
    }
  }
}