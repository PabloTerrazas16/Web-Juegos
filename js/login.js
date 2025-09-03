// Simulación de login usando los usuarios de validUsers.js
function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (!window.validUsers) {
        alert("No hay usuarios cargados.");
        return false;
    }
    const user = window.validUsers.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem("loggedUserEmail", user.email);
        alert("Login exitoso");
        window.location.href = "../index.html";
        return false;
    } else {
        alert("Usuario o contraseña incorrectos.");
        return false;
    }

}

// Conectar al formulario
window.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.onsubmit = function(e) {
            e.preventDefault();
            loginUser();
            return false;
        };
    }
});
