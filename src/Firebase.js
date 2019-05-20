import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

/*
  Create a Realtime Database in Google Firebase: https://console.firebase.google.com
  In Project settings, add to Web App and get the below config information.
*/
const config = {
  apiKey: "abcdefg",
  authDomain: "react-spa-abcdefg.firebaseapp.com",
  databaseURL: "https://react-spa-abcdefg.firebaseio.com",
  projectId: "react-spa-abcdefg",
  storageBucket: "react-spa-abcdefg.appspot.com",
  messagingSenderId: "12345",
  appId: "1:12345:web:abcdefg"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;