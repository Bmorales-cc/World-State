

// Ocultar hero al hacer clic en Descubrir
const discoverBtn = document.getElementById('discover-btn');
const heroSection = document.querySelector('.hero');

if (discoverBtn && heroSection) {
  discoverBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Ocultar el hero section
    heroSection.classList.add('hide');
    
    // Desplazarse a la sección de colección después de la animación
    setTimeout(() => {
      const targetId = discoverBtn.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }, 300); // Tiempo igual a la duración de la transición
  });

  // Mostrar hero al volver al inicio
  window.addEventListener('scroll', () => {
    if (window.scrollY <= 50) {
      heroSection.classList.remove('hide');
    }
  });
}

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

menuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  
  // Toggle menu icon
  const icon = menuToggle.querySelector('i');
  if (mobileNav.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});

// Hero tagline animation
const heroTagline = document.querySelector('.hero-tagline');
setTimeout(() => {
  heroTagline.classList.add('visible');
}, 1000);

// Form Validation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;
  
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  
  // Check name
  if (name.value.trim() === '') {
    setError(name, 'Por favor, ingresa tu nombre');
    isValid = false;
  } else {
    removeError(name);
  }
  
  // Check email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    setError(email, 'Por favor, ingresa un email válido');
    isValid = false;
  } else {
    removeError(email);
  }
  
  // Check message
  if (message.value.trim() === '') {
    setError(message, 'Por favor, ingresa tu mensaje');
    isValid = false;
  } else {
    removeError(message);
  }
  
  if (isValid) {
    // Simulate form submission - in real app this would be an API call
    alert('Gracias por tu mensaje. Te contactaremos pronto.');
    contactForm.reset();
  }
});

function setError(input, message) {
  const formGroup = input.parentElement;
  formGroup.classList.add('error');
  const errorElement = formGroup.querySelector('.form-error');
  errorElement.textContent = message;
}

function removeError(input) {
  const formGroup = input.parentElement;
  formGroup.classList.remove('error');
}

// Instagram Lightbox
const instagramPosts = document.querySelectorAll('.instagram-post');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');

instagramPosts.forEach(post => {
  post.addEventListener('click', () => {
    const imgSrc = post.querySelector('.instagram-image').src;
    const caption = post.getAttribute('data-caption');
    
    lightboxImage.src = imgSrc;
    lightboxCaption.textContent = caption;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Initialize Locomotive Scroll for smooth scrolling effects
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]') || document.body,
  smooth: true,
  smartphone: { smooth: true },
  tablet: { smooth: true }




});

