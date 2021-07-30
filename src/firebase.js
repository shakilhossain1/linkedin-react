import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDiXXwqR-vhs96XTgRl3Dj8g9e7IsEGBDE',
  authDomain: 'linkedin-clone-85f3e.firebaseapp.com',
  projectId: 'linkedin-clone-85f3e',
  storageBucket: 'linkedin-clone-85f3e.appspot.com',
  messagingSenderId: '1007920127848',
  appId: '1:1007920127848:web:c84f1f354e590a93f900dd',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
