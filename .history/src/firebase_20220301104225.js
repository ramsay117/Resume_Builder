import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};
const app = firebase.initializeApp(firebaseConfig)