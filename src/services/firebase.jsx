// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCu6Cc_j7vTBwdXVKMx_YP8qFg4CCN6X2I",
    authDomain: "coder-app-quaino.firebaseapp.com",
    projectId: "coder-app-quaino",
    storageBucket: "coder-app-quaino.firebasestorage.app",
    messagingSenderId: "270324701242",
    appId: "1:270324701242:web:2072ba962bcac046b23d03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)