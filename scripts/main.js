// // main.js

// // function to redirect to shlok.html with mood
// function goToPage(mood) {
//   window.location.href = "shlok.html?mood=" + mood;
// }

// // attach event listeners instead of inline onclick in HTML
// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelectorAll(".mood-btn").forEach(button => {
//     button.addEventListener("click", () => {
//       const mood = button.getAttribute("data-mood");
//       goToPage(mood);
//     });
//   });
// });
// scripts/main.js

// Redirect user to shlok.html with mood as query parameter
function goToPage(mood) {
  window.location.href = "shlok.html?mood=" + mood;
}

document.addEventListener("DOMContentLoaded", () => {
  const moodButtons = document.querySelectorAll(".mood-btn");
  const searchInput = document.getElementById("searchInput");

  // Add click listeners for buttons
  moodButtons.forEach(button => {
    button.addEventListener("click", () => {
      const mood = button.getAttribute("data-mood");
      goToPage(mood);
    });
  });

  // 🔍 Search filter
  searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();
    moodButtons.forEach(button => {
      const moodText = button.innerText.toLowerCase();
      if (moodText.includes(filter)) {
        button.style.display = "inline-block";
      } else {
        button.style.display = "none";
      }
    });
  });
});
