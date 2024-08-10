// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg47OPjuljWwN99PoKyGWDA3-eAxxTqTE",
  authDomain: "inventory-management-c00c8.firebaseapp.com",
  projectId: "inventory-management-c00c8",
  storageBucket: "inventory-management-c00c8.appspot.com",
  messagingSenderId: "12508993369",
  appId: "1:12508993369:web:f65e31652edf1b7964de48",
  measurementId: "G-KKTMLT7H3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}