import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCdO2TMpZpoFGlpn35LSlSn8ghiaBQK5jw",
    authDomain: "portfolio-vue-ff003.firebaseapp.com",
    databaseURL: "https://portfolio-vue-ff003.firebaseio.com",
    projectId: "portfolio-vue-ff003",
    storageBucket: "portfolio-vue-ff003.appspot.com",
    messagingSenderId: "455334722573",
    appId: "1:455334722573:web:ed4db468829fb0b5f8e944"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const settings = { }

db.settings(settings);

export default db;