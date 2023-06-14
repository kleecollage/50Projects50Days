const sliderContainer = document.querySelector(".slider-container");
const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");
const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const slidesLength = rightSide.querySelectorAll("div").length;

let activeSlideIndex = 0;

leftSide.style.top = `-${(slidesLength - 1) * 100}vh`;

upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
  }
  if (activeSlideIndex > slidesLength - 1) {
    activeSlideIndex = 0;
  } else if (direction === "down") {
    activeSlideIndex--;
  }
  if (activeSlideIndex < 0) {
    activeSlideIndex = slidesLength - 1;
  }

  rightSide.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  leftSide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};
