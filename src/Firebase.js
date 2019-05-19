import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

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