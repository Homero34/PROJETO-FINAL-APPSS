// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {initializeAuth, getReactNativePersistence} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABN7qAhFkwaKenVCyaMFmvje0E1suFqGM",
  authDomain: "projetoapps-cf8f7.firebaseapp.com",
  projectId: "projetoapps-cf8f7",
  storageBucket: "projetoapps-cf8f7.firebasestorage.app",
  messagingSenderId: "325172632049",
  appId: "1:325172632049:web:349e4aa0e725b307bfcc50",
  measurementId: "G-SCJ9RQPD0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})  
export { db, auth };