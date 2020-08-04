const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const John = Object.create(soldier);

// const John = {
//     health: 100
// };

//John.__proto__ = soldier; // depricated

Object.setPrototypeOf(John, soldier);

console.log(John.armor);
John.sayHello()