// Firebase Configuration
// NOTE: Replace the config object below with your actual Firebase project config from Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyAI-_MmGMULmM0qsZK5SoQ4fOaSREbJStw",
    authDomain: "whatin-98232.firebaseapp.com",
    projectId: "whatin-98232",
    storageBucket: "whatin-98232.firebasestorage.app",
    messagingSenderId: "773750592727",
    appId: "1:773750592727:web:f87f02cc5edad550fccc92",
    measurementId: "G-5VQBV2928T"
};

// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, collection, addDoc, getDocs, deleteDoc, doc, onSnapshot, query, orderBy, signInWithEmailAndPassword, onAuthStateChanged, signOut };


