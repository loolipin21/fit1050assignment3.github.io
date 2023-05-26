
var slideIndex = 1;
var slideshowInterval;

displaySlide(slideIndex);

function slideControl(n) {
    displaySlide(slideIndex += n);
}

function curSlide(n) {
    displaySlide(slideIndex = n);
}

function displaySlide(n) {
  var i;
  var slides = document.getElementsByClassName("allSlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");

  
  var overlayImages = document.getElementsByClassName("overlay-image");
  for (i = 0; i < overlayImages.length; i++) {
    overlayImages[i].style.opacity = 0;
  }


  var imageContainers = document.getElementsByClassName("image-container");
  for (i = 0; i < imageContainers.length; i++) {
    imageContainers[i].addEventListener("mouseover", function() {
      clearInterval(slideshowInterval); 
      var overlayImage = this.querySelector(".overlay-image");
      overlayImage.style.opacity = 1;
    });

    imageContainers[i].addEventListener("mouseout", function() {
      startSlideshow(); 
      var overlayImage = this.querySelector(".overlay-image");
      overlayImage.style.opacity = 0;
    });
  }

  startSlideshow();
}

function startSlideshow() {
  clearInterval(slideshowInterval); 
  slideshowInterval = setInterval(function() {
    slideIndex++;
    displaySlide(slideIndex);
  }, 4000); 
}
