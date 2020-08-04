"use strict"

function first() {
    // Do somethink
    setTimeout(function() {
        console.log(1);
    }, 500);
}


function second() {
    console.log(2)
}

first();
second();



function learnJS(lang, callback) {
    console.log(`Im learning: ${lang}`);
    callback();
}


function done() {
    console.log('Ive finished this lesson')
}


learnJS('JavaScript', done);