import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCC6BaAyv6CSBxCbUoSPOKmR3ybtxve0Tg",
  authDomain: "facebook-messenger-clone-cbcb5.firebaseapp.com",
  projectId: "facebook-messenger-clone-cbcb5",
  storageBucket: "facebook-messenger-clone-cbcb5.appspot.com",
  messagingSenderId: "73783953479",
  appId: "1:73783953479:web:3ebe07470d0ffedeb1c962",
  measurementId: "G-ZQFQ80M3Q4"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth, db };