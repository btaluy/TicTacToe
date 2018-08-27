import { Friend } from './friend';

export class User {
  public uid: string;
  public name: string;
  public email: string;
  public profileImageURL: string;
  public friends: Friend[];

  public static fromObject(object: any) {
    const user: User = new User();
    if (object) {
      user.uid = object.uid;
      user.name = object.name;
      user.email = object.email;
      user.profileImageURL = object.profileImageURL;
      user.friends = object.friends; 
    }
    return user;
  }
}