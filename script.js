// ================================
// Faizan Jutt Portfolio - script.js
// ================================

document.addEventListener("DOMContentLoaded", () => {

  // ==========================
  // Loading Screen
  // ==========================
  const loader = document.querySelector(".loader");

  window.addEventListener("load", () => {
    setTimeout(() => {
      if (loader) {
        loader.classList.add("hide");
      }
    }, 1200);
  });

  // ==========================
  // Scroll Reveal Animation
  // ==========================
  const revealElements = document.querySelectorAll(
    ".reveal, .project-card, .service-card, .skill, .about-text"
  );

  const reveal = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach((el) => {
      const top = el.getBoundingClientRect().top;

      if (top < windowHeight - 100) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        el.style.transition = "all .8s ease";
      }
    });
  };

  revealElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
  });

  window.addEventListener("scroll", reveal);
  reveal();

  // ==========================
  // Scroll To Top Button
  // ==========================
  const topBtn = document.getElementById("topBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      if (topBtn) topBtn.style.display = "flex";
    } else {
      if (topBtn) topBtn.style.display = "none";
    }
  });

  if (topBtn) {
    topBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // ==========================
  // Smooth Navigation
  // ==========================
  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        e.preventDefault();

        target.scrollIntoView({
          behavior: "smooth"
        });
      }

    });

  });

  // ==========================
  // Active Navbar Link
  // ==========================
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

      const sectionTop = section.offsetTop - 120;

      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }

    });

    navLinks.forEach(link => {

      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }

    });

  });

  // ==========================
  // Premium Hover Effect
  // ==========================
  document
    .querySelectorAll(".project-card, .service-card, .skill")
    .forEach(card => {

      card.addEventListener("mousemove", () => {
        card.style.transform = "translateY(-10px) scale(1.03)";
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });

    });

  // ==========================
  // Fade Hero Content
  // ==========================
  const hero = document.querySelector(".hero-content");

  window.addEventListener("scroll", () => {

    if (!hero) return;

    const y = window.scrollY;

    hero.style.opacity = 1 - y / 700;
    hero.style.transform = `translateY(${y * 0.2}px)`;

  });

});