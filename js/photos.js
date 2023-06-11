
window.addEventListener('load', function() {
    const images = document.querySelectorAll('.image-container img');
    let currentIndex = 0;
    let intervalId;
  
    function startSlideshow() {
      intervalId = setInterval(function() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
      }, 2000);
    }
  
    function stopSlideshow() {
      clearInterval(intervalId);
    }
  
    function resumeSlideshow() {
      if (!intervalId) {
        startSlideshow();
      }
    }
  
    startSlideshow();
  
    const container = document.querySelector('.image-container');
    container.addEventListener('mouseenter', stopSlideshow);
    container.addEventListener('mouseleave', resumeSlideshow);
  });
  