import { auth, db } from "./firebase.js";

import {
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import {
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

// Check Login
onAuthStateChanged(auth, (user) => {

  if (!user) {
    window.location.href = "login.html";
  }

});

// Save Hero
document.getElementById("saveHero").addEventListener("click", async () => {

  await setDoc(doc(db, "portfolio", "hero"), {

    name: document.getElementById("heroName").value,

    title: document.getElementById("heroTitle").value,

    description: document.getElementById("heroDesc").value

  });

  alert("Hero Saved Successfully");

});

// Save About
document.getElementById("saveAbout").addEventListener("click", async () => {

  await setDoc(doc(db, "portfolio", "about"), {

    text: document.getElementById("aboutText").value

  });

  alert("About Saved Successfully");

});

// Save WhatsApp
document.getElementById("saveWhatsapp").addEventListener("click", async () => {

  await setDoc(doc(db, "portfolio", "contact"), {

    whatsapp: document.getElementById("whatsapp").value

  });

  alert("WhatsApp Saved Successfully");

});

// Load Hero
async function loadHero() {

  const docSnap = await getDoc(doc(db, "portfolio", "hero"));

  if (docSnap.exists()) {

    document.getElementById("heroName").value = docSnap.data().name || "";

    document.getElementById("heroTitle").value = docSnap.data().title || "";

    document.getElementById("heroDesc").value = docSnap.data().description || "";

  }

}

// Load About
async function loadAbout() {

  const docSnap = await getDoc(doc(db, "portfolio", "about"));

  if (docSnap.exists()) {

    document.getElementById("aboutText").value = docSnap.data().text || "";

  }

}

// Load WhatsApp
async function loadWhatsapp() {

  const docSnap = await getDoc(doc(db, "portfolio", "contact"));

  if (docSnap.exists()) {

    document.getElementById("whatsapp").value = docSnap.data().whatsapp || "";

  }

}

// Logout
document.getElementById("logoutBtn").addEventListener("click", async () => {

  await signOut(auth);

  window.location.href = "login.html";

});

// Load All
loadHero();
loadAbout();
loadWhatsapp();