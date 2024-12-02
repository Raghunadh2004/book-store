// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7ZwB8GVj5sn6NJ_HarqMUWYvfAmpBVFk",
  authDomain: "book-store-app-db422.firebaseapp.com",
  projectId: "book-store-app-db422",
  storageBucket: "book-store-app-db422.firebasestorage.app",
  messagingSenderId: "295613074035",
  appId: "1:295613074035:web:a96722a160f285bb69f806"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);