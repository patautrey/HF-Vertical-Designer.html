// HF Vertical Designer – JS Navbar Loader
// Loads /partials/navbar.html into any element with id="navbar"

document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("navbar");
  if (!target) return;

  fetch("/partials/navbar.html")
    .then(res => res.text())
    .then(html => {
      target.innerHTML = html;
    })
    .catch(err => {
      console.error("Navbar load failed:", err);
      target.innerHTML = "<div style='color:#f87171;'>Navbar failed to load</div>";
    });
});

