export class Friend {
    public uid: string;
    public name: string;
    public email: string;
    public profileImageURL: string;
  
    public static fromObject(object: any) {
      const friend: Friend = new Friend();
      if (object) {
        friend.uid = object.uid;
        friend.name = object.name;
        friend.email = object.email;
        friend.profileImageURL = object.profileImageURL;
      }
      return friend;
    }
  }