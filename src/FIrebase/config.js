import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALohe4fXktzrNhdnmVEtlo1Oaj0pt2L8E",
  authDomain: "deshicart-1df4c.firebaseapp.com",
  projectId: "deshicart-1df4c",
  storageBucket: "deshicart-1df4c.firebasestorage.app",
  messagingSenderId: "341536258612",
  appId: "1:341536258612:web:f66ffd093b1a45cbc5e861"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
