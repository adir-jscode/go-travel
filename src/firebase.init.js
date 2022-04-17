import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDCbe62kBbwfyfPEKxs7zGsiyOqEI5D-fQ",
  authDomain: "go-travel-c2715.firebaseapp.com",
  projectId: "go-travel-c2715",
  storageBucket: "go-travel-c2715.appspot.com",
  messagingSenderId: "664127078773",
  appId: "1:664127078773:web:6ac14b7f31c02ef937d33c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;