const inputEl = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

inputEl.addEventListener('input', onChangeNameOutput);

function onChangeNameOutput(event) {
    nameOutput.textContent = event.currentTarget.value;

    if (!event.currentTarget.value) {
        nameOutput.textContent = 'Anonymous';
    }
}
