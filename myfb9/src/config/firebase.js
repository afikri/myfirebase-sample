import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAt1cK__zUZLvt1bijaE6irySKqypu53Zs",
  authDomain: "myfbv9.firebaseapp.com",
  projectId: "myfbv9",
  storageBucket: "myfbv9.appspot.com",
  messagingSenderId: "228737780664",
  appId: "1:228737780664:web:6effd189f47fd022ee1d4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);