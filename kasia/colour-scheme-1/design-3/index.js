const slides = document.getElementsByClassName("carousel-item");
const info = document.getElementsByClassName("carousel-info");
const nextButton = document.getElementById("carousel-button-next");
const prevButton = document.getElementById("carousel-button-prev");
const dots = document.getElementsByClassName("dot");
let position = 0;
const numberOfSlides = slides.length;

function hideAllSlides() {
  // remove all slides not currently being viewed
  for (const slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
}
function hideInfo() {
  for (const i of info){
   i.classList.remove("carousel-info-visible");
   i.classList.add("carosuel-info-hidden");
  }
}



const handleMoveToNextSlide = function (e) {
  hideAllSlides();
  hideInfo();
  // check if last slide has been reached
  if (position === numberOfSlides - 1) {
    position = 0; // go back to first slide
  } else {
    // move to next slide
    position++;
  }
  // make current slide visible
  slides[position].classList.add("carousel-item-visible");
  info[position].classList.add("carousel-info-visible");

  // update dot to represent current slide
  dots[position].classList.add("selected-dot");
  dots[position].checked = true;
};

const handleMoveToPrevSlide = function (e) {
  hideAllSlides();
  hideInfo();
  // check if we're on the first slide
  if (position === 0) {
    position = numberOfSlides - 1; // move to the last slide
  } else {
    // move back one
    position--;
  }
  // make current slide visible
  slides[position].classList.add("carousel-item-visible");
  info[position].classList.add("carousel-info-visible");

  // update dot to represent current slide
  dots[position].classList.add("selected-dot");
  dots[position].checked = true;
};

nextButton.addEventListener("click", handleMoveToNextSlide);
prevButton.addEventListener("click", handleMoveToPrevSlide);

const splash = document.querySelector(".splash");
const a = document.querySelector(".logo.fade-in")

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
    //   a.classList.remove("fade-in");
      a.classList.add("fade-out");
    }, 2000);
  });