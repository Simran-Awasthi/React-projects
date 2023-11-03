// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJQqInvIbA7uP5zAypkEd1kjgZgdV1Blo",
  authDomain: "todo-9c68d.firebaseapp.com",
  projectId: "todo-9c68d",
  storageBucket: "todo-9c68d.appspot.com",
  messagingSenderId: "1060774092133",
  appId: "1:1060774092133:web:a46058f5d47e0660cf558c",
  measurementId: "G-ZPTW81XB9K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const firestore = getFirestore(app);
export { auth, db, storage, firestore };
