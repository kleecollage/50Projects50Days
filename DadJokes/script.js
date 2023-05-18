const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", getJoke);

getJoke();

/* ################         USING "ASYNC/AWAIT"         #####################*/
async function getJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}

/* ###############        USING ".then"    ###################
function getJoke() {
    const config = {
        headers: {
          Accept: "application/json",
        },
      };

  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => {
        jokeEl.innerHTML = data.joke
    })

}
 */
