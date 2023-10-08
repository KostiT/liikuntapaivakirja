import * as firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth"

  
//Konfiguraatiotiedostot (poistettu tietosuojasyistä). Toimiva sovellus löytyy Netlify-linkin takaa
  var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "", 
    projectId: "",
    storageBucket: "", 
    messagingSenderId: "", 
    appId: ""
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;