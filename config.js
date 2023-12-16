import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyBfP7hRKKLjiKeW7U2ScYIBH-vLaIYiFtI",
    authDomain: "phone-auth-42cba.firebaseapp.com",
    projectId: "phone-auth-42cba",
    storageBucket: "phone-auth-42cba.appspot.com",
    messagingSenderId: "125579364412",
    appId: "1:125579364412:web:9e604129a12c0d17a25b39"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}