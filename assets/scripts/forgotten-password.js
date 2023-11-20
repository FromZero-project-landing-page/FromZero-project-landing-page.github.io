document.querySelector('.form').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    if (email === '') {
        event.preventDefault();
        document.getElementById('error-message').textContent = 'Por favor, ingrese su correo.   ';
    }
});

