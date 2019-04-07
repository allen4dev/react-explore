import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCxRzOmmnd0u6Ng27Gf6cKEDRLnjgi_dsg',
  authDomain: 'learing-firebase-8fc90.firebaseapp.com',
  databaseURL: 'https://learing-firebase-8fc90.firebaseio.com',
  projectId: 'learing-firebase-8fc90',
  storageBucket: 'learing-firebase-8fc90.appspot.com',
  messagingSenderId: '529376157400',
};

firebase.initializeApp(config);

window.firebase = firebase;

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();

export const signinWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export const register = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const signOut = () => auth.signOut();

export default firebase;
