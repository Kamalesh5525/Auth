
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCwRx1nAAFq9nqc2_Gh0uIq0iEOUz9dg3A",
    authDomain: "auth-f6f53.firebaseapp.com",
    projectId: "auth-f6f53",
    storageBucket: "auth-f6f53.appspot.com",
    messagingSenderId: "1020564355293",
    appId: "1:1020564355293:web:5b618c71bd5303c94d8334",
    measurementId: "G-QQLJNQ6F90"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth()
export const googleAuthProvider = new GoogleAuthProvider()