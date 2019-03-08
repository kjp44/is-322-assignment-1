var slideIndex = 0;
var slides = document.getElementsByClassName("carousel-slide");
showSlides();

function showSlides() {
  slides[slideIndex].className = "carousel-slide";
  slideIndex++;
  if (slideIndex > slides.length - 1){
    slideIndex = 0;
  }
  slides[slideIndex].className += " active";
  setTimeout(showSlides, 2000);
}
