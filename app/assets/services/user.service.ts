import { Injectable } from '@angular/core';
import { User } from '~/assets/domain';

@Injectable()
export class UserService {
  public user: User;
}