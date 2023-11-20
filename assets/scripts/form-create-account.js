document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var userType = document.getElementById('userType').value;

    if (email === '' || username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Por favor, rellene todos los campos.';
    } else {
        localStorage.setItem('email', email);
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('userType', userType);
    
        window.location.href = './index.html';
    
    }
});