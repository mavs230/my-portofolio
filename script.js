// Smooth scroll for navigation links with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 80; // Adjust based on your header height
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the element is visible
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stop observing the element once it's visible so the animation doesn't repeat
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections with the class 'animated-section'
document.querySelectorAll('.animated-section').forEach(section => {
    observer.observe(section);
});

// --- NEW: Typing Animation using Typed.js ---
const typedOptions = {
    strings: [
        'Data Scientist',
        'Machine Learning Geek',
        'Martial Artist'
    ],
    typeSpeed: 70,       // How fast it types
    backSpeed: 40,       // How fast it deletes
    loop: true,          // Loop the animation forever
    backDelay: 1500,     // Wait 1.5s before deleting
    showCursor: true
};

const typed = new Typed('#typed-text', typedOptions);