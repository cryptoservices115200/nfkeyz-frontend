import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAASXNUHe7osMxi0zvNz1guND29a06Y84s",
  authDomain: "nf-key-firebase.firebaseapp.com",
  projectId: "nf-key-firebase",
  storageBucket: "nf-key-firebase.appspot.com",
  messagingSenderId: "858821879082",
  appId: "1:858821879082:web:c4a6124555dcfeee98ea53",
  measurementId: "G-RR6E4563KT",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
export default firebase;
