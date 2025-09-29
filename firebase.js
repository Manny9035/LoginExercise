// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqfZh58zxdCTZ1genngK5K92mA95jQsTQ",
  authDomain: "loginapp-26529.firebaseapp.com",
  projectId: "loginapp-26529",
  storageBucket: "loginapp-26529.firebasestorage.app",
  messagingSenderId: "652534617929",
  appId: "1:652534617929:web:c52434c056aa23219a6c98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export auth and firestore
export const auth = getAuth(app);
export const db = getFirestore(app);