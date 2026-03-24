<script type="module">
// Firebase import
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "JOUW_KEY",
  authDomain: "JOUW_PROJECT.firebaseapp.com",
  databaseURL: "https://JOUW_PROJECT-default-rtdb.firebaseio.com",
  projectId: "JOUW_PROJECT",
  storageBucket: "JOUW_PROJECT.appspot.com",
  messagingSenderId: "123456",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, set, onValue };
</script>
