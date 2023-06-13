const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImg = document.getElementById("profile_img");
const nameEl = document.getElementById("name");
const date = document.getElementById("date");

const animated_bg = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://m.blog.hu/ak/akritizator/image/69-690842_fear-and-loathing-las-vegas-computer-background-fear.jpg" alt="De chill"/>';

  title.innerHTML = "Lorem ipsum dolor sit amet.";

  excerpt.innerHTML =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, mollitia?";

  profileImg.innerHTML =
    '<img src="https://randomuser.me/api/portraits/women/25.jpg" alt="Random Profile"/>';

  nameEl.innerHTML = "Juanita Banana";

  date.innerHTML = "Jan 01, 2001";

  animated_bg.forEach(bg => {
    bg.classList.remove('animated-bg')
  });

  animated_bg_texts.forEach(bg => {
    bg.classList.remove('animated-bg-text')
  });
}
