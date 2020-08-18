// const btn = document.querySelector('button');
//       overlay = document.querySelector('.overlay')

// btn.onclick = function() {
//     alert('Cklick');
// };



//  target.addEventListener(type, listener[, options]);


// btn.addEventListener('click', () => {
//     alert('Click!!!');
// });

// btn.addEventListener('click', () => {
//     alert('SECOND Click!!!');
// });

// btn.addEventListener('mouseenter', () => {
//     console.log('HOVER');
// });

// btn.addEventListener('mouseenter', (e) => {
//     console.log(e);
// });

// btn.addEventListener('mouseenter', (e) => {
//     console.log(e.target);
// });

// btn.addEventListener('mouseenter', (e) => {
//     console.log(e.target);
//     e.target.remove();
// });



// const deleteElement = (e) => {
//     // e.target.remove();
//     console.log(e.target);
// };

// btn.addEventListener('click', deleteElement);
// btn.removeEventListener('click', deleteElement);

// Додати зняти подію при виконанні умови, коли івент лістенер більше не потрібен
// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     i++;
//     if (i == 1) {
//         btn.removeEventListener('click', deleteElement);
//     }
// };
// btn.addEventListener('click', deleteElement);


// Всплитие собития, коли воно піднімається по ієрархі DOM дерева
// const deleteElement = (e) => {
//     console.log(e.target);
//     console.log(e.type);
    

// };
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);


// Вспливе подія (де чітко буде видно ієрархію ДОМ)
// const deleteElement = (e) => {
//     console.log(e.currentTarget);
//     console.log(e.type);
    

// };
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);


// Можна відмінити стандартну поведінку браузера, для цього превентІвент ставимо спочатку.
// const link = document.querySelector('a');

// link.addEventListener('click', (e) => {
//     event.preventDefault();

//     console.log(e.target);
// });



// Повісити один і той же обработчик на кілька кнопок
const btns = document.querySelectorAll('button');
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
};

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});// опція, наприклад зробити лише раз
});

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    event.preventDefault();

    console.log(e.target);
});
