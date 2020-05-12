
import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");


const firebaseConfig = {
  apiKey: "AIzaSyDVy4pZ9lKVJ8Ipb6P_e5XKHAswpaCvVaQ",
  authDomain: "nuxt-blog-f41c2.firebaseapp.com",
  databaseURL: "https://nuxt-blog-f41c2.firebaseio.com",
  projectId: "nuxt-blog-f41c2",
  storageBucket: "nuxt-blog-f41c2.appspot.com",
  messagingSenderId: "83796441387",
  appId: "1:83796441387:web:d01bdfa3ee340c17a06d6e"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {firebase, db, auth, storage}