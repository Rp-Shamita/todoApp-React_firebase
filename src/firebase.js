
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhH-xU4wPuLAG7YNOWLGyZMBIcNFliQiY",
  authDomain: "todo-app-7dd44.firebaseapp.com",
  projectId: "todo-app-7dd44",
  storageBucket: "todo-app-7dd44.appspot.com",
  messagingSenderId: "407619346300",
  appId: "1:407619346300:web:6c2dbbee7c736650690ef9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app), db = getFirestore(), colRef=collection(db, "todo-tasks") ;