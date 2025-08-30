// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// 🔹 Your Firebase config (replace with your Firebase project values)
const firebaseConfig = {
  apiKey: "AIzaSyAn-xqPFj6TDd0kUspsQctfilRDO7cJdrE",
  authDomain: "login-f27f1.firebaseapp.com",
  projectId: "login-f27f1",
  storageBucket: "login-f27f1.firebasestorage.appspot.com",
  messagingSenderId: "184211109394",
  appId: "1:184211109394:web:59d4aaae0e2ac50e3f8acb",
  measurementId: "G-SCF6303WH6"
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  // ✅ Handle Login
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("✅ Logged in: " + userCredential.user.email);

        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 1500);
      } catch (error) {
        alert("❌ Login failed: " + error.message);
      }
    });
  }

  // ✅ Handle Signup (reuse same fields)
  window.createAccount = async function () {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      alert("🎉 Account created for: " + userCredential.user.email);

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1500);
    } catch (error) {
      alert("❌ Signup failed: " + error.message);
    }
  };
});


