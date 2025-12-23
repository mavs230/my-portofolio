/* ================================
   Smooth Scrolling (Header Offset)
================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (!target) return;

    e.preventDefault();

    const headerOffset = 80; // height of sticky nav
    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

/* ================================
   Scroll Animations (Intersection Observer)
================================ */
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px'
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target); // animate once
    }
  });
}, observerOptions);

document.querySelectorAll('.animated-section').forEach(section => {
  observer.observe(section);
});

/* ================================
   Typing Effect (Hero Section)
   Recruiter-safe titles
================================ */
const typedOptions = {
  strings: [
  'IT & Data Science Student',
  'Junior Data Analyst',
  'Python & SQL Developer'
],
  typeSpeed: 65,
  backSpeed: 40,
  backDelay: 1400,
  loop: true,
  showCursor: true,
  cursorChar: '|'
};

new Typed('#typed-text', typedOptions);
