const carouselTrack = document.querySelector('.carousel-track');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let slideIndex = 0;

function showSlide(index) {
  carouselTrack.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % carouselSlides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + carouselSlides.length) % carouselSlides.length;
  showSlide(slideIndex);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);