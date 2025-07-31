// You can expand this with features like real-time search, dropdown calendar, etc.
console.log("Doctor Appointment Page Loaded");
const doctorCards = document.querySelectorAll('.doctor-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 150); // staggered animation
    }
  });
}, {
  threshold: 0.4
});

doctorCards.forEach(card => observer.observe(card));
// Add event listeners for form submission
