import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
        await signInWithEmailAndPassword(auth, email, password);

        message.style.color = "#00ff99";
        message.textContent = "Login Successful...";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);

    } catch (error) {
        message.style.color = "#ff4444";

        switch (error.code) {
            case "auth/invalid-credential":
                message.textContent = "Invalid Email or Password";
                break;

            case "auth/user-not-found":
                message.textContent = "User Not Found";
                break;

            case "auth/wrong-password":
                message.textContent = "Wrong Password";
                break;

            default:
                message.textContent = error.message;
        }
    }
});