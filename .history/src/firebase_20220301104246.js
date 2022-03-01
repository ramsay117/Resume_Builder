import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.,
  authDomain: process.env.,
  projectId: process.env.,
  storageBucket: process.env.,
  messagingSenderId,
  appId,
  measurementId,
};
const app = firebase.initializeApp(firebaseConfig)