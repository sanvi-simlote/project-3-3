let slideIndex = 0;

// Show the first slide initially
showSlides();

// Function to show the slides
function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  
  // Hide all slides initially
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // If it's the last slide, go back to the first one
  if (slideIndex >= slides.length) { slideIndex = 0; }
  if (slideIndex < 0) { slideIndex = slides.length - 1; }

  // Display the current slide
  slides[slideIndex].style.display = "block";
}

// Function to show the previous/next slide
function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

// Attach the event listeners to the buttons (previous and next)
document.querySelector('.prev').addEventListener('click', function() {
  plusSlides(-1); // Previous slide
});

document.querySelector('.next').addEventListener('click', function() {
  plusSlides(1); // Next slide
});
