// Disable scroll-based navigation entirely
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      targetSection.style.display = 'block'; // Ensure the section is visible
      window.location.href = this.getAttribute('href'); // Directly navigate without smooth scroll
  });
});

  
  // Back to Top Button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.innerText = '↑ Back to Top';
  backToTopBtn.style.position = 'fixed';
  backToTopBtn.style.bottom = '20px';
  backToTopBtn.style.right = '20px';
  backToTopBtn.style.display = 'none';
  backToTopBtn.style.backgroundColor = '#1280c0';
  backToTopBtn.style.color = '#fff';
  backToTopBtn.style.border = 'none';
  backToTopBtn.style.padding = '10px 20px';
  backToTopBtn.style.cursor = 'pointer';
  backToTopBtn.style.borderRadius = '5px';
  document.body.appendChild(backToTopBtn);
  
  // Show/Hide Back to Top Button
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  
  // Scroll to Top when Button is Clicked
    // Remove scroll effect for the back-to-top button
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'auto'  // Changed from 'smooth' to 'auto' for instant scrolling
    });
  });

  
  // Lazy Load Images
  document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll("img");
  
    lazyImages.forEach(img => {
      img.setAttribute('loading', 'lazy');
    });
  });
  
  // Image Lightbox
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', function() {
      const lightbox = document.createElement('div');
      lightbox.id = 'lightbox';
      lightbox.style.position = 'fixed';
      lightbox.style.top = 0;
      lightbox.style.left = 0;
      lightbox.style.width = '100%';
      lightbox.style.height = '100%';
      lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      lightbox.style.display = 'flex';
      lightbox.style.alignItems = 'center';
      lightbox.style.justifyContent = 'center';
      document.body.appendChild(lightbox);
  
      const imgElement = document.createElement('img');
      imgElement.src = this.src;
      imgElement.style.maxWidth = '80%';
      imgElement.style.maxHeight = '80%';
      lightbox.appendChild(imgElement);
  
      lightbox.addEventListener('click', function() {
        lightbox.remove();
      });
    });
  });
  
  // Responsive Navbar Toggle
  const menuToggle = document.createElement('button');
  menuToggle.innerText = '☰ Menu';
  menuToggle.style.position = 'absolute';
  menuToggle.style.top = '10px';
  menuToggle.style.right = '20px';
  menuToggle.style.display = 'none';
  menuToggle.style.backgroundColor = '#f39c12';
  menuToggle.style.color = '#fff';
  menuToggle.style.border = 'none';
  menuToggle.style.padding = '10px 20px';
  menuToggle.style.cursor = 'pointer';
  menuToggle.style.borderRadius = '5px';
  
  document.querySelector('header').appendChild(menuToggle);
  
  menuToggle.addEventListener('click', () => {
    const nav = document.querySelector('nav ul');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
  });
  
  // Show/hide menu toggle based on screen size
  window.addEventListener('resize', function() {
    const nav = document.querySelector('nav ul');
    if (window.innerWidth < 768) {
      nav.style.display = 'none';
      menuToggle.style.display = 'block';
    } else {
      nav.style.display = 'flex';
      menuToggle.style.display = 'none';
    }
  });
  
  // Trigger resize event on page load to adjust for initial screen size
  window.dispatchEvent(new Event('resize'));
  
  // Toggle Skill Categories
  document.querySelectorAll('.skill-category').forEach(category => {
    category.addEventListener('click', function() {
      const skillList = this.querySelector('.skill-list');
      if (skillList.classList.contains('hidden')) {
        skillList.classList.remove('hidden');
      } else {
        skillList.classList.add('hidden');
      }
    });
  });
  // Toggle About Section Categories on Mobile
  document.querySelectorAll('.about-category').forEach(category => {
    category.addEventListener('click', function() {
      const aboutList = this.querySelector('.about-list');
      if (aboutList.classList.contains('active')) {
          aboutList.classList.remove('active');
      } else {
          aboutList.classList.add('active');
          // Hide other lists
          document.querySelectorAll('.about-list:not(.active)').forEach(list => {
              list.classList.remove('active');
          });
      }
    });
  });