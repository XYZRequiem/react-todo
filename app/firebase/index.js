import firebase from 'firebase';

// Initialize Firebase
 try {
   var config = {
     apiKey: "AIzaSyCqE5lW7K9ZynQK6s_xIwglAMhQ6sca_zo",
     authDomain: "histoire-todo-app.firebaseapp.com",
     databaseURL: "https://histoire-todo-app.firebaseio.com",
     storageBucket: "histoire-todo-app.appspot.com",
     messagingSenderId: "626841654372"
   };

   firebase.initializeApp(config);
 } catch (e) {

 }

export var firebaseRef = firebase.database().ref();
export default firebase;
