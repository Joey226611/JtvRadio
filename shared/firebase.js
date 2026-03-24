// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js";

// Jouw config (die je stuurde)
const firebaseConfig = {
  apiKey: "AIzaSyDYzfeqkMwg8V0Ok_cXb1arqgEWcKVfbfM",
  authDomain: "jtvradio.firebaseapp.com",
  databaseURL: "https://jtvradio-default-rtdb.firebaseio.com", // 👈 BELANGRIJK TOEGEVOEGD
  projectId: "jtvradio",
  storageBucket: "jtvradio.firebasestorage.app",
  messagingSenderId: "471273476911",
  appId: "1:471273476911:web:e0d25926131212e6ec87da"
};

// Init
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Export zodat andere files het kunnen gebruiken
export { db, ref, set, onValue };
