import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAPC7MadBYv65bFTX3wmW-zVRKt0JcSDnU",
    authDomain: "vue-blog-system-7ca56.firebaseapp.com",
    projectId: "vue-blog-system-7ca56",
    storageBucket: "vue-blog-system-7ca56.appspot.com",
    messagingSenderId: "27380129501",
    appId: "1:27380129501:web:f98e1a7ea4422102bb4534"
};

firebase.initializeApp(firebaseConfig)
let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;
let auth = firebase.auth();

export { db , timestamp , auth }