import * as firebase from 'firebase';
let app = firebase.initializeApp({
    apiKey: "AIzaSyCKXwwT_NGGplMGYPvdrgvQFgFA0q9Dd3A",
    authDomain: "fir-fb828.firebaseapp.com",
    databaseURL: "https://fir-fb828.firebaseio.com",
    projectId: "fir-fb828",
    storageBucket: "fir-fb828.appspot.com",
    messagingSenderId: "216220603379",
    appId: "1:216220603379:web:c407aec18c28b2584a7886",
    measurementId: "G-YKJXQBBCVJ"
  });

  const database = firebase.database();

  export const contactsRef = database.ref('contacts');
  export const addsRef = database.ref('ideas');
