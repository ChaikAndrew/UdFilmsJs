let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Скільки фільмів ви вже переглянули 🎬 ?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const lastFilm = prompt("Який фільм Ви переглянули?", "").trim();
    const ratingFilm = prompt("На скільки оцінюєте даний фільм?", "");

    if (
      lastFilm != null &&
      ratingFilm != null &&
      lastFilm != "" &&
      ratingFilm != "" &&
      lastFilm.length < 50
    ) {
      personalMovieDB.movies[lastFilm] = ratingFilm;
      console.log("ok");
    } else {
      console.log("error");
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Ви не кіноман 🎬");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Ви класичний глядач 🎬 ");
  } else if (personalMovieDB.count >= 30) {
    console.log("Ви кіноман 🎬 ");
  } else {
    console.log("error");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
    console.log("Access open 📂");
  } else {
    console.log("Access closed 🙅 , login please");
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGanres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Ваш улюблений жанр під номером  ${i}`
    );
  }
}

writeYourGanres();
