// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUPctGYnM8nZGS0M2UL1Q6d6JXN9kWyvw",
    authDomain: "crowd-funding-2de04.firebaseapp.com",
    projectId: "crowd-funding-2de04",
    storageBucket: "crowd-funding-2de04.firebasestorage.app",
    messagingSenderId: "818568798762",
    appId: "1:818568798762:web:aee398ef5835fcea95d953"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);