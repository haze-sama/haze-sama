/* Particle Animations */
function initParticles(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const particles = [];
  const particleCount = 100;

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 2 - 1;
      this.speedY = Math.random() * 2 - 1;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initParticles('header-particles');
  initParticles('particles');
  initParticles('services-particles');
  initParticles('contact-particles');
});

/* Navigation Toggle */
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('change', () => {
  menu.style.display = menuToggle.checked ? 'flex' : 'none';
});

/* Service Tabs */
function showService(serviceId, event) {
  event.preventDefault();
  document.querySelectorAll('.service-section').forEach(section => {
    section.classList.add('hidden');
  });
  document.getElementById(serviceId).classList.remove('hidden');
  document.getElementById(serviceId).classList.add('animate-in');

  document.querySelectorAll('.service-nav a').forEach(link => {
    link.classList.remove('active');
  });
  event.target.classList.add('active');

  const indicator = document.querySelector('.service-nav .indicator');
  indicator.style.width = `${event.target.offsetWidth}px`;
  indicator.style.left = `${event.target.offsetLeft}px`;
}

/* Portfolio Tabs */
function showPortfolio(portfolioId, event) {
  event.preventDefault();
  document.querySelectorAll('.portfolio-section').forEach(section => {
    section.classList.add('hidden');
  });
  document.getElementById(portfolioId).classList.remove('hidden');
  document.getElementById(portfolioId).classList.add('animate-in');

  document.querySelectorAll('.portfolio-nav a').forEach(link => {
    link.classList.remove('active');
  });
  event.target.classList.add('active');

  const indicator = document.querySelector('.portfolio-nav .indicator');
  indicator.style.width = `${event.target.offsetWidth}px`;
  indicator.style.left = `${event.target.offsetLeft}px`;
}

/* Carousel Scrolling */
function scrollCarousel(sectionId, direction) {
  const carousel = document.querySelector(`#${sectionId} .carousel`);
  carousel.scrollBy({ left: direction, behavior: 'smooth' });
}

/* Popup Functionality */
function openPopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = 'flex';
  gsap.fromTo(popup.querySelector('.popup-content'), 
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' }
  );
}

/* GSAP Animations */
gsap.from('#home h1', {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
  scrollTrigger: { trigger: '#home', start: 'top 80%' }
});

gsap.from('#home p', {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: 'power3.out',
  scrollTrigger: { trigger: '#home', start: 'top 80%' }
});

gsap.from('#home a', {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.4,
  ease: 'power3.out',
  scrollTrigger: { trigger: '#home', start: 'top 80%' }
});

gsap.from('.card', {
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power3.out',
  scrollTrigger: { trigger: '.card', start: 'top 80%' }
});

/* Form Submission (Placeholder) */
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  console.log('Form submitted:', { name, email, message });
  alert('Mensaje enviado. ¡Gracias por contactarme!');
  e.target.reset();
});