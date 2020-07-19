const numberOfFilms = +prompt('How many films have you already seen?')
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieDB.count);

const a = prompt("Last film you've seen?", ""),
      b = prompt("How do you evaluate this film?", ""),
      c = prompt("Last film you've seen?", ""),
      d = prompt("How do you evaluate this film?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);