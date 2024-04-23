import firebase from 'firebase/app'
import'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAZgtSTMgTBUaw8_bEBSKsuqaub7kG9mp8",
    authDomain: "mymoney-9503c.firebaseapp.com",
    projectId: "mymoney-9503c",
    storageBucket: "mymoney-9503c.appspot.com",
    messagingSenderId: "917510122762",
    appId: "1:917510122762:web:a0f631a3dbc4fb18375ef3"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  export { projectFirestore, projectAuth }