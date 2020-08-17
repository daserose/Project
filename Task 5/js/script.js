/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
    item.remove();
});

genre.textContent = 'DDDDRRRAAAMMMAAA'

poster.style.backgroundImage = 'url("img/bg.jpg")'


movieList.innerHTML = "";

movieDB.movies.sort();

// console.log(poster.innerHTML);

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
})

// a = a + 1;
// a += 1;

// let a = function() {
//     const div = document.createElement('partToReplace');
//     div.classList.add('task_2');
//     document.querySelector('.promo__bg').append(div);
// };
// // a();

// let b = function() {
//     const text = document.createTextNode('DRAMA');
//     document.querySelector('.task_2').append(text);
// };
// // b();

// let c = function() {
//     const d = document.querySelector('.task_2');
//     document.querySelector('.promo__genre').replaceWith(d);
// };
// // c();

// let replacer = function() {
//     a();
//     b();
//     c();
// };
// replacer();