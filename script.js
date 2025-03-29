// Select the toggle button and body
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Check if dark mode was previously enabled
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  darkModeToggle.textContent = "☀️"; // Sun icon when dark mode is active
}

// Toggle dark mode on button click
if (darkModeToggle) {
  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save dark mode state in localStorage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      darkModeToggle.textContent = "☀️";
    } else {
      localStorage.setItem("darkMode", "disabled");
      darkModeToggle.textContent = "🌙";
    }
  });
}
