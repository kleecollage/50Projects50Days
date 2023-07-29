const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createStar(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

createStar = (e) => {
  const star = document.createElement("i");
  star.classList.add("fa-sharp");
  star.classList.add("fa-solid");
  star.classList.add("fa-star");

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  star.style.top = `${yInside}px`;
  star.style.left = `${xInside}px`;

  loveMe.appendChild(star);

  times.innerHTML = ++timesClicked;

  setTimeout(() => star.remove(), 1000);
};
