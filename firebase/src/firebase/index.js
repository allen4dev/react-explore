import 'firebase/firestore';
import firebase from 'firebase/app';

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

export const firestore = firebase.firestore();

export default firebase;
