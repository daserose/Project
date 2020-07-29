"use strict"

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films have you already seen?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have you already seen?', '');
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
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
}

rememberMyFilms();



function kinoLevel() {
    if (personalMovieDB.count < 10) {
        console.log("bad");
    } else if ((personalMovieDB.count >=10) && (personalMovieDB.count <=30)) {
        console.log("good");
    } else {
        console.log("very good");
    }
}

kinoLevel();


function showMyDB() {

    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    } else {
        console.log('errore_1')
    }
}

showMyDB();


function writeYourGenres() {
    for (let i = 1; i <= 3; i++ ) {
        const genre = prompt(`Your favorite genre under position ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();