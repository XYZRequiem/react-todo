import firebase from 'firebase'

// Initialize Firebase
 var config = {
   apiKey: "AIzaSyCqE5lW7K9ZynQK6s_xIwglAMhQ6sca_zo",
   authDomain: "histoire-todo-app.firebaseapp.com",
   databaseURL: "https://histoire-todo-app.firebaseio.com",
   storageBucket: "histoire-todo-app.appspot.com",
   messagingSenderId: "626841654372"
 };
 firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '3.6.5'
  },
  isRunning: true,
  user: {
    name: 'Antoine',
    age: 25
  },
  todos: {
    '123abcd': {
      text: 'Film some vids',
      createdAt: 300
    }
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Release the hounds',
  createdAt: 300
});

todosRef.push({
  text: 'Release the felines',
  createdAt: 300
});
