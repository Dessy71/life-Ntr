// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Preloader
    setTimeout(function () {
        const preloader = document.querySelector('.preloader');
        const mainContent = document.querySelector('.main-content');

        // Fade out the preloader
        preloader.style.opacity = 0;

        // Hide the preloader after fade out animation
        setTimeout(function () {
            preloader.style.display = 'none';
            // Show the main content
            mainContent.style.display = 'block';
        }, 1000); // 1s fade-out duration
    }, 4000); // 4s delay before fading out

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

    // Hero image zoom and fade on scroll
    const heroImage = document.querySelector('.hero-image img');
    const heroContainer = document.querySelector('.hero-image');
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;

        // Calculate zoom factor (max zoom: 1.5)
        const scale = 1 + scrollPosition / 1000;
        heroImage.style.transform = `scale(${Math.min(scale, 1.5)})`;

        // Apply fade effect
        const opacity = Math.min(scrollPosition / 1000, 0.5);
        heroImage.style.opacity = 1 - opacity;

        // Optionally apply a gradient overlay
        if (heroContainer) {
            heroContainer.style.background = `linear-gradient(rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, 0.5)), url('images/hero.jpg') no-repeat center center/cover`;
        }
    });

    // Change header background color on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            header.style.backgroundColor = '#333'; // Solid color
        } else {
            header.style.backgroundColor = 'transparent'; // Transparent background
        }
    });
});
