// Document ready function
document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation class to elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Run on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Newsletter form submission
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value) {
                // In a real application, you would send this to your server
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    });
});

// Form validation for contact page
if (document.getElementById('contactForm')) {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Validate name
        const nameInput = document.getElementById('name');
        if (nameInput.value.trim() === '') {
            isValid = false;
            nameInput.classList.add('is-invalid');
        } else {
            nameInput.classList.remove('is-invalid');
        }
        
        // Validate email
        const emailInput = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            isValid = false;
            emailInput.classList.add('is-invalid');
        } else {
            emailInput.classList.remove('is-invalid');
        }
        
        // Validate message
        const messageInput = document.getElementById('message');
        if (messageInput.value.trim() === '') {
            isValid = false;
            messageInput.classList.add('is-invalid');
        } else {
            messageInput.classList.remove('is-invalid');
        }
        
        if (isValid) {
            // In a real application, you would send the form data to your server
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        }
    });
}