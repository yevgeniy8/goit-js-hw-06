const buttonEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');

buttonEl.addEventListener('click', changeColor);

function changeColor() {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    textEl.textContent = randomColor;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
