const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(loginForm));

    if (Object.values(formData).some(value => value === '')) {
        alert('Будь ласка, заповніть всі поля');
    } else {
        console.log(formData);
        loginForm.reset();
    }
});
