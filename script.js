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

// Theme management system with localStorage persistence
const homeSection = document.getElementById('home');
const changeColorButton = document.createElement('button');
const themes = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)'
];

// Initialize theme from localStorage or set default
let currentThemeIndex = localStorage.getItem('themeIndex') || 0;
homeSection.style.background = themes[currentThemeIndex];
homeSection.style.transition = 'background 0.5s ease';

// Create and style theme button
changeColorButton.textContent = '🎨 Change Theme';
changeColorButton.classList.add('theme-btn');
homeSection.appendChild(changeColorButton);

// Theme rotation functionality
changeColorButton.addEventListener('click', () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    homeSection.style.background = themes[currentThemeIndex];
    localStorage.setItem('themeIndex', currentThemeIndex);
    
    // Button animation
    changeColorButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        changeColorButton.style.transform = 'scale(1)';
    }, 100);
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all project sections
document.querySelectorAll('.project').forEach(project => {
    observer.observe(project);
});