import firebase from 'firebase';

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

const firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Juliana',
    age: 28
  }
}).then(() => {
  // firebase.set() is a promise
  console.log('Set worked!');
}, (e) => {
  console.log('Set failed :(');
});

// ========================================
/* NOTE: .set() always wipes and replaces everything on the database */
// firebaseRef.set({
//   appName: 'Todo Application'
// });

// ========================================
/* instead of .set(), child updates/wipes only the item you are mentioning */
// firebaseRef.child('user').child('name').set('Juh');

// ========================================
/* EXERCISE 1
Replace the app name */
// firebaseRef.child('app').set({
//   name: 'New Todo App'
// });

// ========================================
/* NOTE: Update only updates the first level of properties.
So in a object, it wont update the childs of the object.
In the exemple, the 'app/name' is a multipath update */
// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// });

// ========================================
/* another way of calling a multipath update. */
// firebaseRef.child('app').update({
//   name: 'Todo Application 2'
// }).then(() => {
//   console.log('Update worked!');
// }, () => {
//   console.log('Update failed');
// });

// ========================================
/* EXERCISE 2
with one call to update, update the app name and user name.
Use multipath updates in one call. */
// firebaseRef.update({
//   'app/name': 'Todo Application 3',
//   'user/name': 'Juh'
// });

// ========================================
/* EXERCISE 3
use child method to update app name and user name in different calls. */
// firebaseRef.child('app').update({
//   name: 'Todo Application 4'
// });
// firebaseRef.child('user').update({
//   name: 'Juliana Juh'
// });

// ========================================
/* Ways to remove data from the firebase: */
// firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// ========================================
/* EXERCISE 4
Use the null technique to remove the isRunning from the database */
// firebaseRef.update({
//   isRunning: null
// });
/* Use the child technique to remove the user age */
// firebaseRef.child('user/age').remove();

// ========================================
/* The ONCE promise would run just once. */
// firebaseRef.once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire ', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });

// ========================================
/* The ON promise would run everytime a change is made to the mentioned value. */
// firebaseRef.on('value', (snapshot) => {
//   console.log('Got value', snapshot.val());
// });
/* In this case it would run the ON promise again. */
// firebaseRef.update({
//   isRunning: false
// });

// ========================================
/* Used to STOP tracking from values */
// firebaseRef.off();

// ========================================
/* EXERCISE 5
Listen to changes to the user object using ON and update the user name.
It should trigger the ON response ONLY when the user object is being updated.
To test, update the app's name and it should not trigger the ON statement.*/
// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('Trigger user modifier:', snapshot.val());
// });
// firebaseRef.update({
//   'user/name': 'Juh'
// }); // it should trigger the ON statement
// firebaseRef.update({
//   'app/name': 'Testing App'
// }); // it should not trigger the ON statement

// ========================================
/* ARRAYS */
// var notesRef = firebaseRef.child('notes');
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });

// var newNoteRef = notesRef.push({
//   text: 'Walk the cat'
// });
// console.log('Todo id', newNoteRef.key);

// ========================================
/* EXERCISE 6
Create a new variable that stores a reference to the Todos array.
Array of reference to store Todo items.
child_added, print key and value
add two Todos (using push() passing text property)
refresh things in chrome
*/
// var todosRef = firebaseRef.child('todos');
// todosRef.on('child_added', (snapshot) => {
//   console.log('Todos: ', snapshot.key, snapshot.val());
// });
// todosRef.push({
//   text: 'Write a text'
// });
// todosRef.push({
//   text: 'Wash the dishes'
// });
