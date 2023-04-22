import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";
import * as dotenv from "dotenv";
require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-firebase-app-4889f.firebaseapp.com",
  projectId: "react-firebase-app-4889f",
  storageBucket: "react-firebase-app-4889f.appspot.com",
  messagingSenderId: "236548264125",
  appId: process.env.APP_ID,
  measurementId: "G-TRJJE7JXSZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);