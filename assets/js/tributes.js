// Change header background color on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        header.style.backgroundColor = '#333'; // Solid color
    } else {
        header.style.backgroundColor = '#333'; // Transparent background
    }
});

 // Hamburger Menu (Mobile view)
 const hamburgerMenu = document.querySelector('.hamburger-menu');
 const navLinksMobile = document.querySelector('.nav-links');

 hamburgerMenu.addEventListener('click', () => {
     navLinksMobile.classList.toggle('active'); // Toggle menu visibility
     hamburgerMenu.classList.toggle('active'); // Toggle hamburger/close icon
 });

 // Highlight active nav link when clicked
 const navLinks = document.querySelectorAll('nav ul li a');
 navLinks.forEach(link => {
     link.addEventListener('click', function () {
         // Remove 'active' class from all links
         navLinks.forEach(link => link.classList.remove('active'));
         // Add 'active' class to the clicked link
         this.classList.add('active');

         // Close the menu after clicking a link (if it's open)
         if (window.innerWidth <= 768) {
             navLinksMobile.classList.remove('active');
             hamburgerMenu.classList.remove('active');
         }
     });
 });