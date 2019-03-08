let slideIndex = 0;
let slides = document.getElementsByClassName("carousel-slide");
let indicators = document.getElementsByClassName("carousel-indicator");
let interval = setInterval(showSlide, 4000);

function myFunction() {
  var mainNav = document.getElementById("myMainNav");
  if (mainNav.className === "main-nav") {
    mainNav.className += " responsive";
  } else {
    mainNav.className = "main-nav";
  }
}

function nextSlide(){
	resetSlideClass();
	slideIndex++;
	resetSlideIndex();
	setSlideClassActive();
	resetInterval()
}

function prevSlide(){
	resetSlideClass();
	slideIndex--;
	resetSlideIndex();
	setSlideClassActive();
	resetInterval()
}

function setCurrentSlide(slide){
	resetSlideClass();
	slideIndex = slide;
	setSlideClassActive();
	resetInterval()
}

function showSlide() {
	resetSlideClass();
  	slideIndex++;
  	resetSlideIndex()
  	setSlideClassActive();
}

function resetSlideClass(){
	slides[slideIndex].className = "carousel-slide"
	indicators[slideIndex].className = "carousel-indicator";
}

function resetSlideIndex(){
	if (slideIndex > slides.length - 1){
		slideIndex = 0;
	} else if (slideIndex < 0){
		slideIndex = slides.length - 1;
	}
}

function setSlideClassActive(){
	slides[slideIndex].className += " active";
	indicators[slideIndex].className += " active";

}

function resetInterval(){
	clearInterval(interval);
	interval = setInterval(showSlide, 4000);
}
