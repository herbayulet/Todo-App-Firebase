// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDocs, addDoc,deleteDoc, updateDoc, collection} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmNlNJ28AfWYicvgFjrRWHUGnIOjkRdKs",
    authDomain: "myapp-b2c48.firebaseapp.com",
    projectId: "myapp-b2c48",
    storageBucket: "myapp-b2c48.appspot.com",
    messagingSenderId: "557289133268",
    appId: "1:557289133268:web:cca610f62b7f67a0b99741",
    measurementId: "G-QTJ3LQ9WYG"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db, doc, getDocs, addDoc,deleteDoc, updateDoc, collection }