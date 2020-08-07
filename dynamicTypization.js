"use strict"

// to string

// 1)

console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)
console.log(typeof(5 + ''));

const num = 5;
console.log('https://google.com/' + num);


// To Number

// 1)
console.log(typeof(Number('4')));

// 2)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt('15px', 10)));

// To boolean

// false

0, '', null, undefined, NaN;

// true
[], {}, ' '.....

// 1)

let switcher = null;

if (switcher) {
    console.log('working');
}

switcher = 1;

if (switcher) {
    console.log('working');
}

// 2)
console.log(typeof(Boolean('4')));
console.log(Boolean(Symbol()));

// 3)
console.log(typeof(!!'33333'));


//______________________________TASK______________________________//


//Какое будет выведено значение: let x = 5; alert( x++ );
let x = 5;
alert( x++ ); //5
alert( ++x ); //6


//Чему равно такое выражение: [ ] + false - null + true ?
[ ] + false - null + true
console.log([ ] + false;// string
console.log([ ] + false - null);//NaN
console.log([ ] + false - null + true);//NaN



//Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
let y = 1; let x = y = 2; alert(x);
let y = 1;
let x = y = 2;// from right to left
alert(x);//2



//Чему равна сумма [ ] + 1 + 2?
console.log([ ] + 1 + 2); //12   ([] + 1) string,  string + 2 concantination



//Что выведет этот код: alert( "1"[0] )
console.log( "12"[1] );



//Чему равно 2 && 1 && null && 0 && undefined 
console.log(2 && 1 && null && 0 && undefined);

&& - Stumbles on false
|| - Stumbles on true



// Есть ли разница между выражениями? !!( a && b ) и (a && b)
console.log(!!(1 && 2) == (1 && 2));



//Что выведет этот код: alert( null || 2 && 3 || 4 );
// Operator priority table
console.log( null || 2 && 3 || 4 );
console.log(2 && 3);//3
console.log( null || 3);
console.log(3 || 4);



//a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?// false
const a = [1, 2, 3];
const b = [1, 2, 3];



//Что выведет этот код: alert( +"Infinity" );
console.log(+'infinity');
console.log(typeof((+'infinity')));



//Верно ли сравнение: "Ёжик" > "яблоко"?
console.log("Ёжик" > "яблоко")