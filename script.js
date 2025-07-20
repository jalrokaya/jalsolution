function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}

// Simple slider logic for homepage slider
let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  if (slides.length === 0) return;

  slides.forEach(slide => (slide.style.display = 'none'));

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 4000); // Change slide every 4 seconds
}

document.addEventListener('DOMContentLoaded', () => {
  showSlides();

  // Optional: handle form submissions with alerts (demo only)
  const quotationForm = document.getElementById('quotationForm');
  const consultationForm = document.getElementById('consultationForm');

  if (quotationForm) {
    quotationForm.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thank you for your quotation request! We will contact you soon.');
      quotationForm.reset();
    });
  }

  if (consultationForm) {
    consultationForm.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thank you for your consultation request! We will contact you soon.');
      consultationForm.reset();
    });
  }
});
