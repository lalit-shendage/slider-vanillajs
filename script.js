const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const buttons = document.querySelectorAll(".button");

let current = 0;
let prev = slides.length - 1;
let next = 1;

// Function to go to the previous slide
const gotoPrev = () => {
  current = current > 0 ? current - 1 : slides.length - 1;
  prev = current === 0 ? slides.length - 1 : current - 1;
  next = current === slides.length - 1 ? 0 : current + 1;
  updateSlider();
};

// Function to go to the next slide
const gotoNext = () => {
  current = current < slides.length - 1 ? current + 1 : 0;
  prev = current === 0 ? slides.length - 1 : current - 1;
  next = current === slides.length - 1 ? 0 : current + 1;
  updateSlider();
};

// Function to update the slider with new classes
const updateSlider = () => {
  slides.forEach((slide, index) => {
    slide.classList.remove("active", "prev", "next");
    if (index === current) slide.classList.add("active");
    if (index === prev) slide.classList.add("prev");
    if (index === next) slide.classList.add("next");
  });
};

// Add click event listeners to the buttons
buttons[0].addEventListener("click", gotoPrev);
buttons[1].addEventListener("click", gotoNext);

// Automatic rotation
const autoRotate = setInterval(gotoNext, 5000); // Change slide every 5 seconds
