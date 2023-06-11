const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const slideWidth = slider.offsetWidth;

let slideIndex = 0;

function slideNext() {
  slideIndex++;
  if (slideIndex >= slides.children.length) {
    slideIndex = 0;
  }
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function slidePrev() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.children.length - 1;
  }
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

document.getElementById('nextBtn').addEventListener('click', slideNext);
document.getElementById('prevBtn').addEventListener('click', slidePrev);