import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {getFirestore, addDoc, collection} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDb1DQXVgUc1cnAr11XftQexM249KFhEz4", //ik you can access the database via this but it's filled with crap dont waste ur time....ty
  authDomain: "netflix-4e13f.firebaseapp.com",
  projectId: "netflix-4e13f",
  storageBucket: "netflix-4e13f.firebasestorage.app",
  messagingSenderId: "1015279647581",
  appId: "1:1015279647581:web:b05d8b2e639fe3115e86b4",
  measurementId: "G-P1W3Z62XBD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch(error) {
        console.log(error);
        alert(error.message);
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch(error) {
        console.log(error);
        alert(error.message);
    }
}

const logout = async () => {
    try {
        await signOut(auth);
    } catch(error) {
        console.log(error);
        alert(error.message);
    }
}

export { auth, db, login, signUp, logout };
