import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

export const firebaseConfig = {
apiKey: "AIzaSyDkNsAdr7gMs8LfKAQDgsmBiOTmbFpVjNg",
authDomain: "attendies-2efdd.firebaseapp.com",
projectId: "attendies-2efdd",
storageBucket: "attendies-2efdd.appspot.com",
messagingSenderId: "443030887286",
appId: "1:443030887286:web:8da78da8c6c09751927857",
measurementId: "G-WECXEHSGFD"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)

export default app
