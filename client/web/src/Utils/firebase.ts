import firebase from 'firebase';

export const initializeFirebase = () => {
  let config = {
    apiKey: process.env.REACT_APP_API_KEY_FIREBASE,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAINE,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
  };

  firebase.initializeApp(config);
  firebase.analytics();
};
