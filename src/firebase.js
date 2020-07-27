  import firebase from 'firebase/app';
  import 'firebase/firestore'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCf5rKQnEWIhbCwx3mw90WoPvf4Q8XBUtE",
    authDomain: "andopq-back.firebaseapp.com",
    databaseURL: "https://andopq-back.firebaseio.com",
    projectId: "andopq-back",
    storageBucket: "andopq-back.appspot.com",
    messagingSenderId: "399839525576",
    appId: "1:399839525576:web:35800add25e779c60443fd",
    measurementId: "G-K1VW58SH87"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();