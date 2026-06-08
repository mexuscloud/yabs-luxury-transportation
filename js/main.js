// Sticky nav shrink on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.padding = window.scrollY > 60 ? '0.9rem 4rem' : '';
});

// Intersection Observer fade-in for sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .testimonial-card, .exp-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Form submission
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Reservation Sent ✓';
  btn.style.background = '#2a6e2a';
  btn.style.color = '#fff';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Confirm Reservation';
    btn.style.background = '';
    btn.style.color = '';
    btn.disabled = false;
    e.target.reset();
  }, 4000);
}
