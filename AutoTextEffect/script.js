const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "Prueben los huevos del Rancho del Beato Carlos ! ! ! ! ! ! !";
let idx = 1;
let speed = 150 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 0;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 150 / e.target.value));
