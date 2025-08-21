
// display.js

const params = new URLSearchParams(window.location.search);
const mood = params.get("mood");

// Load shloks.json dynamically
fetch("data/shloks.json")
  .then(res => res.json())
  .then(shloks => {
    if (shloks[mood]) {
      const list = shloks[mood];
      const randomIndex = Math.floor(Math.random() * list.length);
      const selected = list[randomIndex];
      document.getElementById("shlok").innerText = selected.shlok;
      document.getElementById("meaning").innerText = selected.meaning;
    }
  });

document.querySelector(".back-btn").addEventListener("click", () => {
  window.location.href = "index.html";
});
