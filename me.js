// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn?.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
        const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
        menuIcon?.classList.toggle('active');
    });
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuBtn?.contains(e.target as Node) && !navLinks?.contains(e.target as Node)) {
            navLinks?.classList.remove('active');
        }
    });
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e)  {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href) {
                document.querySelector(href)?.scrollIntoView({
                    behavior: 'smooth'
                });
                navLinks?.classList.remove('active');
            }
        });
    });
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    contactForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this as HTMLFormElement);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        alert('Message sent successfully!');
        (this as HTMLFormElement
        ).reset();
    });
    // Update copyright year
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear().toString();
    }
    // Animate skill bars on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('.skill-progress').forEach((skillBar) => {
        observer.observe(skillBar);
    });
});