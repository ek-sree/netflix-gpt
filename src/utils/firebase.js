// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8yePkPZKHD06zXez45pKI8ITefSIgTpI",
  authDomain: "netflixgpt-8e781.firebaseapp.com",
  projectId: "netflixgpt-8e781",
  storageBucket: "netflixgpt-8e781.appspot.com",
  messagingSenderId: "650389034881",
  appId: "1:650389034881:web:b6802d061cec85c9edfa80",
  measurementId: "G-583T92ZN3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()