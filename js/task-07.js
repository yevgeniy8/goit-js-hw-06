const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', changeFontSize);

function changeFontSize(event) {
    textEl.style.fontSize = `${event.currentTarget.valueAsNumber}px`;
}
