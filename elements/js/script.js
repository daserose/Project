'use strict';

///______________DOM___________________//


const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');
      

// console.dir(box);

// box.style.backgroundColor = 'green';
// box.style.width = '500px';
box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%'
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) 
//     hearts[i].style.backgroundColor = 'green';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'orange';
});



//__________________DOM Methods_________________________//

const div = document.createElement('div');
// document.body.append(div); appendChild
// document.querySelector('.wrapper').append(div);
// wrapper.prepend(div);
// hearts[0].after(div);
// circles[0].remove();
// hearts[0].replaceWith(circles[0]);



const text = document.createTextNode('Some text');


div.classList.add('black');
wrapper.append(div);
// div.innerHTML = 'Hello World';
// div.innerHTML = '<h1>HELLO</h1>';
// div.textContent = 'Some text';

div.innerHTML = '<h1>HELLO</h1>';
div.insertAdjacentHTML('afterend', '<h3>HELLO!!!</h3>'); //afterbegin; afterbegin; beforeend; afterend;


