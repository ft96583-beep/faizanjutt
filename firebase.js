// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx5GCGRpOT4io3RguidsgsTIOFpsYq6jI",
  authDomain: "faizan-portfoli.firebaseapp.com",
  projectId: "faizan-portfoli",
  storageBucket: "faizan-portfoli.firebasestorage.app",
  messagingSenderId: "615968871015",
  appId: "1:615968871015:web:add6483497cf7337837ac2",
  measurementId: "G-430QPHKGV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Services
const auth = getAuth(app);
const db = getFirestore(app);

// Export
export { auth, db };