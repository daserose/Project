'use strict'

const arr = [1, 2, 3, 6, 8];

console.log(arr.length);

arr.pop();
arr.push(10);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} inside array ${arr}`);
});



const str = prompt("Enter");
const products = str.split(',');
products.sort();
console.log(products.join('--'));



const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a -b;
};