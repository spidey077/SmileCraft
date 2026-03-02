// Preloader and Hero Animation
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const heroContent = document.querySelector('.hero-content');
    const navbar = document.getElementById('navbar');

    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';

    setTimeout(() => {
        navbar.classList.add('active');
        heroContent.classList.add('active');
    }, 300);
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    const isActive = navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');

    // Prevent scrolling when menu is open
    document.body.style.overflow = isActive ? 'hidden' : '';
});

// Sticky Navbar Blur Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '15px 5%';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.padding = '20px 5%';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Offset for sticky navbar
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission Simulation
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = bookingForm.querySelector('.submit-btn');
        const originalText = btn.innerText;

        btn.innerText = 'Sending...';
        btn.disabled = true;

        setTimeout(() => {
            alert('Thank you! This is a demo. In a live site, your message would be sent to the clinic.');
            btn.innerText = originalText;
            btn.disabled = false;
            bookingForm.reset();
        }, 1500);
    });
}

// Simple Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Apply initial styles and observe elements
document.querySelectorAll('section, .service-card, .team-card, .testimonial-card').forEach((el, index) => {
    el.classList.add('reveal');
    el.style.setProperty('--order', index % 3); // Stagger for cards
    observer.observe(el);
});
