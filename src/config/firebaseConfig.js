import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBlPIlcanzwDp7tUZlTIPnvPafBJTSn7eM",
  authDomain: "message-a6e23.firebaseapp.com",
  projectId: "message-a6e23",
  storageBucket: "message-a6e23.appspot.com",
  messagingSenderId: "494946412769",
  appId: "1:494946412769:web:288de3f128e1b29940afa0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
