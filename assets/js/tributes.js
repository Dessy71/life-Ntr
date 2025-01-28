// Change header background color on scroll
const header = document.querySelector("header");
let isScrolling = false;
window.addEventListener("scroll", function () {
  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(() => {
      if (window.scrollY > 0) {
        header.style.backgroundColor = "#333"; // Solid color
      } else {
        header.style.backgroundColor = "transparent"; // Transparent background
      }
      isScrolling = false;
    });
  }
});

// Hamburger Menu (Mobile view)
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinksMobile = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
  navLinksMobile.classList.toggle("active"); // Toggle menu visibility
  hamburgerMenu.classList.toggle("active"); // Toggle hamburger/close icon
});

// Highlight active nav link when clicked
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove 'active' class from all links
    navLinks.forEach((link) => link.classList.remove("active"));
    // Add 'active' class to the clicked link
    this.classList.add("active");

    // Close the menu after clicking a link (if it's open)
    if (window.innerWidth <= 768) {
      navLinksMobile.classList.remove("active");
      hamburgerMenu.classList.remove("active");
    }
  });
});

// limt row for name
const nameInput = document.getElementById('name');
const displayName = document.getElementById('display-name');

nameInput.addEventListener('input', () => {
  const inputText = nameInput.value.trim();
  
  // Set name text in display
  displayName.textContent = inputText;

  // Adjust font size based on input length
  if (inputText.length > 30) {
    displayName.style.fontSize = '14px';
  } else if (inputText.length > 20) {
    displayName.style.fontSize = '16px';
  } else {
    displayName.style.fontSize = '18px';
  }
});
