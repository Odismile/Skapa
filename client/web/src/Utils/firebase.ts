import firebase from 'firebase';

export const initializeFirebase = () => {
  console.log(`process.env.REACT_APP_API_KEY_FIREBASE`, process.env.REACT_APP_API_KEY_FIREBASE);
  let config = {
    apiKey: process.env.REACT_APP_API_KEY_FIREBASE,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAINE,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MESUREMENT_ID,
  };

  firebase.initializeApp(config);
  firebase.analytics();
};
