let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", "");
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
    const lastFilm = prompt("Один з останніх переглянутих фільмів?", "");
    const ratingFilm = prompt("На скільки оцінюєте фільм?", "");

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
    console.log("ви не кіноман");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("ви класичний глядач");
  } else if (personalMovieDB.count >= 30) {
    console.log("кіноман");
  } else {
    console.log("error");
  }
}

detectPersonalLevel();

console.log(personalMovieDB);
