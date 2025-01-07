const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=aea628e690300ae51c08b5357b329b22&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=<SECRET_KEY>&query="';

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWE2MjhlNjkwMzAwYWU1MWMwOGI1MzU3YjMyOWIyMiIsInN1YiI6IjY0NzdiNjRjMGUyOWEyMDExNmFhZmM0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TRldBImIwIjkNGdFS7UW0hOJA-sHV-ZKxdw65mmbCnk",
  },
};

// GET INITIAL MOVIES

getMovies(API_URL, options);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
  console.log(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, overview, vote_average } = movie;

    const movieEl = document.createElement("div");

    movieEl.classList.add("movie");

    movieEl.innerHTML = `
                <img
                src="${IMG_PATH + poster_path}"
                alt="${title}"
                />
                <div class="movie-info">
                <h3>${title}</h3>
                <span class=${getClassByRate(vote_average)}>${
      Math.ceil(vote_average * 10) / 10
    }</span>
                </div>
                <div class="overview">
                <h3>Overview</h3>
                ${overview}
                </div>
            </div>`;

    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

//  SEARCH INPUT

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    searchTerm.value = "";
  } else {
    window.location.reload();
  }
});
