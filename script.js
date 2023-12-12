const numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  ganres: [],
  privat: false,
};

const a = prompt("Один з останніх переглянутих фільмів?", ""),
  b = prompt("На скільки оцінюєте фільм?", ""),
  c = prompt("Один з останніх переглянутих фільмів?", ""),
  d = prompt("На скільки оцінюєте фільм?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
