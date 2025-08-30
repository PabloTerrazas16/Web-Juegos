function validEmailFormat(email) {
    const validDomain = "@duocuc.cl";
    return email.endsWith(validDomain);
}

function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!validEmailFormat(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }

    if (password.length < 10) {
        alert("La contraseña debe tener al menos 10 caracteres.");
        return false;
    }

    return true;
}