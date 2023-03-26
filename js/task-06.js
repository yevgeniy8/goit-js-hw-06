const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onCheckValidation);

function onCheckValidation(event) {
    if (event.currentTarget.value.length >= Number(event.currentTarget.dataset.length)) {
        event.currentTarget.classList.add('valid');

        if (event.currentTarget.classList.contains('invalid')) {
            event.currentTarget.classList.remove('invalid');
        }
    } else {
        event.currentTarget.classList.add('invalid');

        if (event.currentTarget.classList.contains('valid')) {
            event.currentTarget.classList.remove('valid');
        }
    }
}
