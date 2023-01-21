// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQqXqI9mc7AdCmUqaF8SDVmjY-ljLls30",
  authDomain: "pollution-tracker-348f1.firebaseapp.com",
  projectId: "pollution-tracker-348f1",
  storageBucket: "pollution-tracker-348f1.appspot.com",
  messagingSenderId: "831857278130",
  appId: "1:831857278130:web:8dbd4d20b3410cbb415dab",
  measurementId: "G-TK79665PZ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
