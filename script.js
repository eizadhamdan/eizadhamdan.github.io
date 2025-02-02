function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  // Check if dark mode is stored in localStorage
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️"; // Sun icon for light mode
  }

  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    // Save preference to localStorage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      darkModeToggle.textContent = "☀️";
    } else {
      localStorage.setItem("darkMode", "disabled");
      darkModeToggle.textContent = "🌙";
    }
  });
});
