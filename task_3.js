"use strict"

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

    start: function() {
        personalMovieDB.count = +prompt('How many films have you already seen?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films have you already seen?', '');
        }
    },

    rememberMyFilms: function() {
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
    },

    kinoLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("bad");
        } else if ((personalMovieDB.count >=10) && (personalMovieDB.count <=30)) {
            console.log("good");
        } else {
            console.log("very good");
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++ ) {
            let genre = prompt('Your favorite genre under position ${i}');
            if (genre === '' || genre === null) {
                console.log('ERRORE_2');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;    
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`favorit genre ${i + 1} - is ${item}`);
        });
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.kinoLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
