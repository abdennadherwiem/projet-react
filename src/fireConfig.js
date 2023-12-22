import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCk2uzDz3buXO3r9E-oJk7YAEPUFkbt60M",
  authDomain: " authuser-de6cb.firebaseapp.com ",
  projectId: " authuser-de6cb ",
  storageBucket: " authuser-de6cb.appspot.com ",
  messagingSenderId: " 1075110916115",
  appId: "1:1075110916115:web:7cc79d004e089acb244fe6" 
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app)
export default db;
