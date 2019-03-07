var slideIndex = 0;
var slides = document.getElementsByClassName("carousel-slide");
var indicators = document.getElementsByClassName("carousel-indicator");
let interval = setInterval(showSlides, 4000);

function nextSlide(){
	slides[slideIndex].className = "carousel-slide";
	indicators[slideIndex].className = "carousel-indicator";
	slideIndex++;
	if (slideIndex > slides.length - 1){
		slideIndex = 0;
	}
	slides[slideIndex].className += " active";
	indicators[slideIndex].className += " active";
	clearInterval(interval);
	interval = setInterval(showSlides, 4000);
}

function prevSlide(){
	slides[slideIndex].className = "carousel-slide";
	indicators[slideIndex].className = "carousel-indicator";
	slideIndex--;
	if (slideIndex < 0){
		slideIndex = slides.length - 1;
	}
	slides[slideIndex].className += " active";
	indicators[slideIndex].className += " active";
	clearInterval(interval);
	interval = setInterval(showSlides, 4000);
}

function setCurrentSlide(slide){
	slideIndex = slide;
	for(var i = 0; i < slides.length; i++){
		slides[i].className = "carousel-slide"
		indicators[i].className = 'carousel-indicator'
	}
	slides[slideIndex].className += " active";
	indicators[slideIndex].className += " active"
	clearInterval(interval);
	interval = setInterval(showSlides, 4000);
}

function showSlides() {
  	console.log(slideIndex)
  	slideIndex++;
  	for(var i = 0; i < slides.length; i++){
		slides[i].className = "carousel-slide"
		indicators[i].className = 'carousel-indicator'
	}
	if (slideIndex > slides.length - 1){
		slideIndex = 0;
	}
  	slides[slideIndex].className += " active";
  	indicators[slideIndex].className += " active"
}
