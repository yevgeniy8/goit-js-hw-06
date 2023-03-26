const buttonCreateEl = document.querySelector('[data-create]');
const buttonDestroyEl = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');
const divBoxesEl = document.querySelector('#boxes');

buttonCreateEl.addEventListener('click', createBoxes);
buttonDestroyEl.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    amount = inputEl.value;

    for (let i = 0; i < amount; i += 1) {
        const markup = document.createElement('div');
        const size = 30 + 10 * i;
        divBoxesEl.append(markup);

        markup.style.width = `${size}px`;
        markup.style.height = `${size}px`;
        markup.style.backgroundColor = getRandomHexColor();

        console.log(markup);
    }
}

function destroyBoxes() {
    divBoxesEl.innerHTML = '';
    inputEl.value = '';
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
