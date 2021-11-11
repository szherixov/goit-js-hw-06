let counterValue = 0;

let leftBtn = document.querySelector('button[data-action="decrement"]');
let rightBtn = document.querySelector('button[data-action="increment"]');
let num = document.querySelector('#value')


leftBtn.addEventListener('click', () => {
    counterValue -= 1;
    num.textContent = counterValue
});


rightBtn.addEventListener('click', () => {
    counterValue += 1;
    num.textContent = counterValue
});