import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDjtJAq2YJavjiSzVHJM4LdLZHQ-J0zQ54",
  authDomain: "m-city-f05bc.firebaseapp.com",
  databaseURL: "https://m-city-f05bc.firebaseio.com",
  projectId: "m-city-f05bc",
  storageBucket: "m-city-f05bc.appspot.com",
  messagingSenderId: "265154637632",
  appId: "1:265154637632:web:aa341030a79aa5b80e94a5",
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();

firebaseDB
  .ref("matches")
  .once("value")
  .then((snapshot) => {
    console.log(snapshot);
  });
