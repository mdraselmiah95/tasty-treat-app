import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Initialize Firebase
console.log(firebaseConfig);
const initializeFirebase = () => {
  initializeApp(firebaseConfig);
};

export default initializeFirebase;
