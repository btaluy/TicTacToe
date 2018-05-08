import * as firebase from "../../firebase";
export declare module firestore {
    class Firestore {
        collection(collectionPath: string): firebase.firestore.CollectionReference;
    }
}
