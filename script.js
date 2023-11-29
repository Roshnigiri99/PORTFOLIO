window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
  // Resume function remains unchanged
function openResume() {
    window.open('assets/RESUME.pdf', '_blank');
  }
  
  // Interactive elements
  document.addEventListener('DOMContentLoaded', function() {
    // Button hover effect
    const resumeButton = document.querySelector('button');
    resumeButton.addEventListener('mouseover', function() {
      resumeButton.style.backgroundColor = '#0056b3';
    });
    resumeButton.addEventListener('mouseout', function() {
      resumeButton.style.backgroundColor = '#007bff';
    });
  
    // Image slider (example)
    const projectItems = document.querySelectorAll('.project-item img');
    let currentSlide = 0;
    function showSlide(n) {
      projectItems.forEach(function(item) {
        item.style.display = 'none';
      });
      projectItems[n].style.display = 'block';
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % projectItems.length;
      showSlide(currentSlide);
    }
  
    setInterval(nextSlide, 3000); // Auto slideshow every 3 seconds
  
    // Modal (example)
    const projectGallery = document.querySelector('.project-gallery');
    projectGallery.addEventListener('click', function(event) {
      if (event.target.tagName === 'IMG') {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        const clickedImage = event.target.cloneNode(true);
        modal.appendChild(clickedImage);
        document.body.appendChild(modal);
  
        modal.addEventListener('click', function() {
          document.body.removeChild(modal);
        });
      }
    });
  });
  