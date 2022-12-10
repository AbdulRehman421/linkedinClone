import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBbPH9o5eRUtQuCHdO2o1MRXyunmaUI6p8",
    authDomain: "linkedin-clone-56493.firebaseapp.com",
    projectId: "linkedin-clone-56493",
    storageBucket: "linkedin-clone-56493.appspot.com",
    messagingSenderId: "25096694410",
    appId: "1:25096694410:web:c8e2ad3286ba0e9f3adb73",
    measurementId: "G-4Y2XD4H4TC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }