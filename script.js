// slider

const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider-btn-left");
const btnRight = document.querySelector(".slider-btn-right");

// overlay
let activeElement;
const [main] = document.getElementsByTagName("main");
const apple = document.querySelector(".nav-icon");
const macOverlay = document.querySelector(".mac-overlay");
const macListItem = document.querySelector(".mac-list-item");
const storeListItem = document.querySelector(".store-list-item");
const storeOverlay = document.querySelector(".store-overlay");
const ipadListItem = document.querySelector(".ipad-list-item");
const ipadOverlay = document.querySelector(".ipad-overlay");
const iphoneListItem = document.querySelector(".iphone-list-item");
const iphoneOverlay = document.querySelector(".iphone-overlay");
const watchListItem = document.querySelector(".watch-list-item");
const watchOverlay = document.querySelector(".watch-overlay");
const airpodsListItem = document.querySelector(".airpods-list-item");
const airpodsOverlay = document.querySelector(".airpods-overlay");
const tvListItem = document.querySelector(".tv-list-item");
const tvOverlay = document.querySelector(".tv-overlay");
const entListItem = document.querySelector(".ent-list-item");
const entOverlay = document.querySelector(".ent-overlay");
const accListItem = document.querySelector(".acc-list-item");
const accOverlay = document.querySelector(".acc-overlay");
const supportListItem = document.querySelector(".support-list-item");
const supportOverlay = document.querySelector(".support-overlay");

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
    activeElement.classList.remove("add-z");
  }
  activeElement = overlayItem;
  activeElement.classList.add("open");
  activeElement.classList.add("add-z");
  main.classList.add("open");
};

main.addEventListener("mouseover", () => {
  activeElement.classList.remove("open");
  activeElement = null;
  main.classList.remove("open");
});

apple.addEventListener("mouseover", () => {
  activeElement.classList.remove("open");
  activeElement = null;
  main.classList.remove("open");
});

macListItem.addEventListener("mouseover", () => activateOverlay(macOverlay));
storeListItem.addEventListener("mouseover", () =>
  activateOverlay(storeOverlay)
);
ipadListItem.addEventListener("mouseover", () => activateOverlay(ipadOverlay));
iphoneListItem.addEventListener("mouseover", () =>
  activateOverlay(iphoneOverlay)
);
watchListItem.addEventListener("mouseover", () =>
  activateOverlay(watchOverlay)
);
airpodsListItem.addEventListener("mouseover", () =>
  activateOverlay(airpodsOverlay)
);
tvListItem.addEventListener("mouseover", () => activateOverlay(tvOverlay));
entListItem.addEventListener("mouseover", () => activateOverlay(entOverlay));
accListItem.addEventListener("mouseover", () => activateOverlay(accOverlay));
supportListItem.addEventListener("mouseover", () =>
  activateOverlay(supportOverlay)
);
