import * as firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCWTk76JJQWBwDgIgBURN5AZ5e7uaHTxyQ",
  authDomain: "eventapp-95845.firebaseapp.com",
  databaseURL: "https://eventapp-95845.firebaseio.com",
  projectId: "eventapp-95845",
  storageBucket: "eventapp-95845.appspot.com",
  messagingSenderId: "1060055168746",
  appId: "1:1060055168746:web:36b577c69a3cc69b45c993",
  measurementId: "G-D8QVPKHWHQ"
};
firebase.initializeApp(config);
export default firebase;
