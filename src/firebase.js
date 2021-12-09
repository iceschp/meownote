import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyD3NytE7BncdtOvOSwe1jLvREuEL-csB0Q",
    authDomain: "meownote-web.firebaseapp.com",
    projectId: "meownote-web",
    storageBucket: "meownote-web.appspot.com",
    messagingSenderId: "823403966533",
    appId: "1:823403966533:web:814bc092070367dc19332c",
});

export const auth = firebase.auth();
const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
GoogleAuthProvider.setCustomParameters({ prompt: "select_account" });
export const signInwithGoogle = () => auth.signInWithPopup(GoogleAuthProvider);

export default firebaseConfig;
