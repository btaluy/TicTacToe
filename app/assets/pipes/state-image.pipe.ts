import { Pipe, PipeTransform } from '@angular/core';
import { State } from '../domain';
 
@Pipe({ name: 'stateImage' })
export class StateImagePipe implements PipeTransform {
  transform(value: State): string  {
    switch (value) {
      case State.Circle:
        return '~/assets/img/circle.png';
      case State.Cross:
        return '~/assets/img/cross.png';
    }
  }
}