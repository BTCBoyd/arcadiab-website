// Scroll-triggered animations for ArcadiaB website

// Add fade-in-up animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Observe all cards, sections, and product items
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.card, .step-item, .product-hero, .section-header');
    animatedElements.forEach(el => {
        el.classList.add('animate-me');
        observer.observe(el);
    });
});

// Parallax effect on scroll for hero sections
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const heroSections = document.querySelectorAll('.product-hero, .section[style*="padding-top: 8rem"]');
    
    heroSections.forEach(hero => {
        if (hero.getBoundingClientRect().top < window.innerHeight && hero.getBoundingClientRect().bottom > 0) {
            const offset = currentScrollY * 0.5;
            hero.style.transform = `translateY(${offset}px)`;
        }
    });
    
    lastScrollY = currentScrollY;
}, { passive: true });
