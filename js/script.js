'use strict';

const box = document.getElementById('box');

// console.log(box);

const btns = document.getElementsByTagName('button'); //...('button')[1]; - get elem by index

// console.log(btns[1]);

const circles = document.getElementsByClassName('circle');
// console.log(circles);

const hearts = document.querySelectorAll('.heart');

// console.log(hearts);

hearts.forEach(item => {
    // console.log(item);
});

const oneHeart = document.querySelector('div');// querySelector - first compatible element!!!
// console.log(oneHeart);