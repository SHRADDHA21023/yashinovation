// script.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("navbar").innerHTML = html;

      // Optional: Toggle for mobile
      const toggle = document.getElementById("mobile-toggle");
      const menu = document.querySelector(".navmenu ul");
      if (toggle && menu) {
        toggle.addEventListener("click", () => {
          menu.classList.toggle("show");
        });
      }
    });
});
