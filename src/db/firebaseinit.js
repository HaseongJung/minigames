// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth"; //계정 인증 기능

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-yT0j5G-EXfBkpDjevWtvANYixuQ_LPM",
  authDomain: "web-game-40db8.firebaseapp.com",
  projectId: "web-game-40db8",
  storageBucket: "web-game-40db8.appspot.com",
  messagingSenderId: "1010148163008",
  appId: "1:1010148163008:web:55aaac9a53b8ef82069c25",
  measurementId: "G-00CE22H73D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app)

export {app, analytics, auth, db};