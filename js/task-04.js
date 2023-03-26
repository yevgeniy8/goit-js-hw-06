const buttonIncrEl = document.querySelector('[data-action="increment"]');
const buttonDecrEl = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

buttonIncrEl.addEventListener('click', incrementClick);
buttonDecrEl.addEventListener('click', decrementClick);

function incrementClick() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}

function decrementClick() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}
