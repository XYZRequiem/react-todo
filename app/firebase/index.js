import firebase from 'firebase';

// Initialize Firebase
 try {
   var config = {
     apiKey: process.env.API_KEY,
     authDomain: process.env.AUTH_DOMAIN,
     databaseURL: process.env.DATABASE_URL,
     projectId: process.env.PROJECT_ID,
     storageBucket: process.env.STORAGE_BUCKET,
     messagingSenderId: process.env.MESSAGING_SENDER_ID,
   };

   firebase.initializeApp(config);
 } catch (e) {
   console.log(e);
   document.innerHTML += '' + e;
 }
export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;
