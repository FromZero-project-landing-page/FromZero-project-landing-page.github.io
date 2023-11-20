
let userEmail = localStorage.getItem('email');
let userName = localStorage.getItem('username');
let userPassword = localStorage.getItem('password');
let userType = localStorage.getItem('userType');

document.querySelector('.form').addEventListener('submit', function(event) {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if (email !== userEmail || password !== userPassword) {
        event.preventDefault();
        document.getElementById('error-message').textContent = 'Hay un error en el correo o la contraseña.';
    }
});


document.querySelector('.form').addEventListener('submit', function(event) {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if (email === '' || password === '') {
        event.preventDefault();
        document.getElementById('error-message').textContent = 'Por favor, rellene todos los campos.';
    }
});

