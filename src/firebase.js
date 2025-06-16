// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "usaditoys-6b82b.firebaseapp.com",
  projectId: "usaditoys-6b82b",
  storageBucket: "usaditoys-6b82b.appspot.com",
  messagingSenderId: "1022236700975",
  appId: "1:1022236700975:web:7957d6c5ddd3465c1c31da",
  measurementId: "G-H50TQPL608",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
