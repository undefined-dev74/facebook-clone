import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBMnfaEwYqj1T4fWYM8qmrog6G_-m6KQr0',
  authDomain: 'facebook-clone-19761.firebaseapp.com',
  databaseURL: 'https://facebook-clone-19761-default-rtdb.firebaseio.com',
  projectId: 'facebook-clone-19761',
  storageBucket: 'facebook-clone-19761.appspot.com',
  messagingSenderId: '1061772735071',
  appId: '1:1061772735071:web:e2f5b54ac2a804fafaa1ea',
  measurementId: 'G-XENFETH69E',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
console.log(db.app);

export { auth, provider };
export default db;
