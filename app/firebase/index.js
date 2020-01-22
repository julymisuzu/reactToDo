import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET
  };

  console.log('>>>>>>',config)

  firebase.initializeApp(config);
} catch(e) {
  console.log('Firebase config error:', e);
}

export const firebaseRef = firebase.database().ref();
export default firebase;