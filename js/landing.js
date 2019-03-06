var slideIndex = 0;
var slides = document.getElementsByClassName("carousel-item");
showSlides();

function showSlides() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].className = "carousel-item";
  }
  slides[slideIndex].className += " active";
  slideIndex++;
  if (slideIndex > slides.length - 1){
    slideIndex = 0;
  }
  setTimeout(showSlides, 4000);
}
