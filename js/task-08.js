const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    if (!email.value || !password.value) {
        return alert('Всі поля повинні бути заповнені');
    }

    const date = {
        email: email.value,
        password: password.value,
    };

    console.log(date);

    event.currentTarget.reset();
}
