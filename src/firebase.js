import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCx2iKs4eVArGxvW0NgItB8_tdf7RHrtk4",
  authDomain: "coachcoin-4324c.firebaseapp.com",
  projectId: "coachcoin-4324c",
  storageBucket: "coachcoin-4324c.appspot.com",
  messagingSenderId: "465744926408",
  appId: "1:465744926408:web:3a0eccf6ec3de48084b7fd",
  measurementId: "G-4XQ37KZ206"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)

export default app
/*
const firebaseConfig = {
  apiKey: "AIzaSyCx2iKs4eVArGxvW0NgItB8_tdf7RHrtk4",
  authDomain: "coachcoin-4324c.firebaseapp.com",
  projectId: "coachcoin-4324c",
  storageBucket: "coachcoin-4324c.appspot.com",
  messagingSenderId: "465744926408",
  appId: "1:465744926408:web:3a0eccf6ec3de48084b7fd",
  measurementId: "G-4XQ37KZ206"
};
 */

//chatGPT
/*service cloud.firestore {
  match /databases/{database}/documents {
    
    match /user/{document} {
      allow read, write: if request.auth != null;
    }
  }
}*/

//Original
/*service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}*/