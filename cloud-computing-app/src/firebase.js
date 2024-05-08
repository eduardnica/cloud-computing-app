// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXM4wVqgi6xNTtHGVWJ8hRHRbXq7fdJCY",
    authDomain: "cloud-computing-app-a54ff.firebaseapp.com",
    projectId: "cloud-computing-app-a54ff",
    storageBucket: "cloud-computing-app-a54ff.appspot.com",
    messagingSenderId: "244936372687",
    appId: "1:244936372687:web:75bf928d100518cf9962ba"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
