// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxQVJUG9Ye83qEqYI417qq-ABG24ILFIU",
  authDomain: "simple-social-app-6494c.firebaseapp.com",
  projectId: "simple-social-app-6494c",
  storageBucket: "simple-social-app-6494c.appspot.com",
  messagingSenderId: "713677743833",
  appId: "1:713677743833:web:c3e70d671f006c643100c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
