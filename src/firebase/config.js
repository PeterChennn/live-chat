import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA2O5xmhbwr8yoRtxwmOOJA5oXZ7AtlGyU',
  authDomain: 'vue-firebase-sites-de191.firebaseapp.com',
  projectId: 'vue-firebase-sites-de191',
  storageBucket: 'vue-firebase-sites-de191.appspot.com',
  messagingSenderId: '266426501855',
  appId: '1:266426501855:web:c4ce89bf1d28b7520f376a',
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
