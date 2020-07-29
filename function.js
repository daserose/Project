"use strict";

function showMessage() {
    console.log('hello');
}

function showMessage_1(text) {
    console.log(text);
}

showMessage();
showMessage_1("another text");



function calc(a, b) {
    return (a + b);
    console.log('12');

}

console.log(calc(3, 1));
console.log(calc(3, 2));
console.log(calc(3, 3));


function ret() {
    let num = 50;

    /////
    /////
    /////

    return num;
}

const anotherNum = ret();
console.log(anotherNum);



const logger = function() {
    console.log("HELLO");
};

logger();


const calc = (a, b) => console.log(a + b);
calc(1, 4);