import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyB55nvLyX9V4juERzqX29wTpYNNvdO0_is",
    authDomain: "todo-list-3724d.firebaseapp.com",
    projectId: "todo-list-3724d",
    storageBucket: "todo-list-3724d.appspot.com",
    messagingSenderId: "1010491303714",
    appId: "1:1010491303714:web:42b9519d1f569535b7277b"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app)