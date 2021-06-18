import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBFfd1brSVdeaXJh32TYNcgaeZwXuzoxYQ",
    authDomain: "storyhub-a323c.firebaseapp.com",
    projectId: "storyhub-a323c",
    storageBucket: "storyhub-a323c.appspot.com",
    messagingSenderId: "594273491852",
    appId: "1:594273491852:web:a9c2e918fbd3235299d4a9",
    measurementId:"G-6V3WZCEFNB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();