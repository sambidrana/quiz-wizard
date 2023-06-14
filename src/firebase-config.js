// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB67gRgNmAiE3dCEhD0dVUNktflGvFGUis",
  authDomain: "quizwizard-7f348.firebaseapp.com",
  projectId: "quizwizard-7f348",
  storageBucket: "quizwizard-7f348.appspot.com",
  messagingSenderId: "609485399334",
  appId: "1:609485399334:web:adb9eb34d9919b48de0de7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)