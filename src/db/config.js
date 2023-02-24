import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDprBEP61aEFAE6N74hRfGNT85htuQeoHs",
  authDomain: "project-react-coder.firebaseapp.com",
  projectId: "project-react-coder",
  storageBucket: "project-react-coder.appspot.com",
  messagingSenderId: "456157024651",
  appId: "1:456157024651:web:a78219c59a0c5d71601f8e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);