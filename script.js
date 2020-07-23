// const numberOfFilms = +prompt('How many films have you already seen?')
// console.log(numberOfFilms);

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// console.log(personalMovieDB.count);

// const a = prompt("Last film you've seen?", ""),
//       b = prompt("How do you evaluate this film?", ""),
//       c = prompt("Last film you've seen?", ""),
//       d = prompt("How do you evaluate this film?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);
// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 1000) {
//     console.log('to many');
// } else {
//     console.log('Ok');
// }

// (num ===50) ? console.log('ok') : console.log('error');

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('wrong');
//         break;
//     case 48:
//         console.log('wrong');
//         break;
//     case 50:
//         console.log('true');
//         break;
//     default:
//         console.log('if does not mach');
//         break;
// }

let num = 50;

// while (num < 55) {
//     cconsole.log(num);
//     num++;console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

for (let i = 1; i < 8; i++) {
    console.log(i);
}

for (let k = 1; k < 10; k++) {
    if (k===8) {
        break;
    }
    console.log(k);
}

for (let k = 1; k < 10; k++) {
    if (k===8) {
        continue;
    }
    console.log(k);
}