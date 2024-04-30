import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBN2hwt2gtzM7d2U8rSnVfuG5VbIfylnyA",
  authDomain: "mymoney-676a0.firebaseapp.com",
  projectId: "mymoney-676a0",
  storageBucket: "mymoney-676a0.appspot.com",
  messagingSenderId: "149098756932",
  appId: "1:149098756932:web:3ee5777f52ef804467b511"
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timeatamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp };
