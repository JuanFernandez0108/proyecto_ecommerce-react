import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDZLj0jYSmm6G1B3JZfyh3pNNfiQ7VoHKA",
    authDomain: "ecommerce-olioli-petstore.firebaseapp.com",
    projectId: "ecommerce-olioli-petstore",
    storageBucket: "ecommerce-olioli-petstore.appspot.com",
    messagingSenderId: "30461353289",
    appId: "1:30461353289:web:8f161230db258eab74ce98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

