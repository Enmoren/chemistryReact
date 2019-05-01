import firebase from 'firebase/app';
import 'firebase/storage';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyASFDWNjQJ59NyAG8-qsOGWTDsAbKxwwgI",
  authDomain: "paperpanacea-e0c0a.firebaseapp.com",
  databaseURL: "https://paperpanacea-e0c0a.firebaseio.com",
  projectId: "paperpanacea-e0c0a",
  storageBucket: "paperpanacea-e0c0a.appspot.com",
  messagingSenderId: "188954991561"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export {
  storage, firebase as default
}
