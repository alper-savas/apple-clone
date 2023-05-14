// slider

const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider-btn-left");
const btnRight = document.querySelector(".slider-btn-right");

// overlay
let activeElement;
const [main] = document.getElementsByTagName("main");
const macOverlay = document.querySelector(".mac-overlay");
const macListItem = document.querySelector(".mac-list-item");
const storeListItem = document.querySelector(".store-list-item");
const storeOverlay = document.querySelector(".store-overlay");
const ipadListItem = document.querySelector(".ipad-list-item");
const ipadOverlay = document.querySelector(".ipad-overlay");

let currentSlide = 0;
const maxSlides = slides.length;

const sliderFunction = (slide) => {
  slides.forEach((s, i) => {
    s.style.transform = `scale(0.8) translateX(${(i - slide) * 126.2}%)`;
  });
};

sliderFunction(0);

const nextSlide = () => {
  if (currentSlide === maxSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  sliderFunction(currentSlide);
};

const prevSlide = () => {
  if (currentSlide === 0) {
    currentSlide = maxSlides - 1;
  } else {
    currentSlide--;
  }
  sliderFunction(currentSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});

// activate overlay
const activateOverlay = (overlayItem) => {
  if (activeElement) {
    activeElement.classList.remove("open");
  }
  activeElement = overlayItem;
  activeElement.classList.add("open");
  main.classList.add("open");
};

main.addEventListener("mouseover", () => {
  activeElement.classList.remove("open");
  activeElement = null;
  main.classList.remove("open");
});

macListItem.addEventListener("mouseover", () => activateOverlay(macOverlay));
storeListItem.addEventListener("mouseover", () =>
  activateOverlay(storeOverlay)
);
ipadListItem.addEventListener("mouseover", () => activateOverlay(ipadOverlay));
