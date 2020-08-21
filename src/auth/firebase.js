import firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyAMh5mGy_Cx5jwpi5dy3kXsdW-HKPKtaSU",
  authDomain: "clone-acb67.firebaseapp.com",
  databaseURL: "https://clone-acb67.firebaseio.com",
  projectId: "clone-acb67",
  storageBucket: "clone-acb67.appspot.com",
  messagingSenderId: "742856234126",
  appId: "1:742856234126:web:1b65b0b44d1e83d37da5df"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth }



