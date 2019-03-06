var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides() {
  slideIndex++
  showSlides(slideIndex);
}

function minusSlides(){
  slideIndex--
  showSlides(slideIndex);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-item");
  var dots = document.getElementsByClassName("carousel-indicator");
  console.log(n)
  if (n > slides.length){
    slideIndex = 1
  }
  if (n < 1){
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}