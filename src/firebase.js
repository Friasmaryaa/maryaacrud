import firebase from "firebase/compat/app";
import "firebase/compat/database";
const firebaseConfig = {
    apiKey: "AIzaSyB8XjSy3td_e-ygnk8mSxKQnXE-WCfEyM4",
    authDomain: "friasapp.firebaseapp.com",
    projectId: "friasapp",
    storageBucket: "friasapp.appspot.com",
    messagingSenderId: "362780086831",
    appId: "1:362780086831:web:c46d7ee49d7a6a4dda2cda"
  };
const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref()