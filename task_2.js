let numberOfFilms;
do {
    numberOfFilms = +prompt('How many films have you already seen?');
}
while ((numberOfFilms === 0) || (numberOfFilms > 50));


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i =0; i < 2; i++) {
    const a = prompt("Last film you've seen?", ""),
          b = prompt("How do you evaluate this film?", "");
    if (a != null && b != null && a != '' && b != '' && a.length < 10) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('errore');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("bad");
} else if ((personalMovieDB.count >=10) && (personalMovieDB.count <=30)) {
    console.log("good");
} else {
    console.log("very good");
}

console.log(personalMovieDB);