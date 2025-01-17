// Change header background color on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        header.style.backgroundColor = '#333'; // Solid color
    } else {
        header.style.backgroundColor = "transparent"; // Transparent background
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

// Enlarge photo on click (Lightbox feature)
const photoItems = document.querySelectorAll('.photo-item img');
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

const lightboxCloseButton = document.createElement('button');
lightboxCloseButton.classList.add('lightbox-close');
lightboxCloseButton.textContent = '✖';
lightbox.appendChild(lightboxCloseButton);

const lightboxImage = document.createElement('img');
lightbox.appendChild(lightboxImage);

photoItems.forEach(photo => {
    photo.addEventListener('click', () => {
        lightboxImage.src = photo.src;
        lightbox.style.display = 'flex';
    });
});

lightboxCloseButton.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
