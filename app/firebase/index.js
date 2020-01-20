import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBS1uDDPd9XSyu_8I8lYBXOiTYYetwRpSc",
    authDomain: "juh-todo-app.firebaseapp.com",
    databaseURL: "https://juh-todo-app.firebaseio.com",
    projectId: "juh-todo-app",
    storageBucket: "juh-todo-app.appspot.com",
    messagingSenderId: "883275832173"
  };

  firebase.initializeApp(config);
} catch(e) {
  console.log('Firebase config error:', e);
}

export const firebaseRef = firebase.database().ref();
export default firebase;