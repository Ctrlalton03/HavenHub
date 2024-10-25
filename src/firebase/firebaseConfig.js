import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBVfnPXmCj0UbHb3E-T9gXXJapRfZ-tL5U",
    authDomain: "havenhub-25bff.firebaseapp.com",
    projectId: "havenhub-25bff",
    storageBucket: "havenhub-25bff.appspot.com",
    messagingSenderId: "509978263150",
    appId: "1:509978263150:web:b28f8a0760f81eb45f307f",
    measurementId: "G-NNQHW1M4HS"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  const db = getFirestore(app);

  export default db;