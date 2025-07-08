// app.js - HBaker's Cafeteria Website Interactions

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for nav links
  const links = document.querySelectorAll("nav a");
  for (let link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Simple contact form handler (future enhancement)
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for reaching out to HBaker's! We'll get back to you soon.");
      contactForm.reset();
    });
  }
});
