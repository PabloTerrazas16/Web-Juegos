const isValid = true;

function validEmailFormat(email) {
    const validDomain = "@duocuc.cl";
    return email.endsWith(validDomain);
}

function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("username");
    const cellphone = document.getElementById("cellphone");
    const categoria = document.getElementById("categoria");

    if (username.value === "" || email.value === "" || password.value === "") {
        alert("Por favor, completa todos los campos.");
    return isValid = false;
    }

    if (!validEmailFormat(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }

    if (password.length < 10) {
        alert("La contraseña debe tener al menos 10 caracteres.");
        return false;
    }
    

    if (isValid) {
        alert(`Registro completado satisfactoriamente \n Usuario: ${username.value}, email: ${email}, Contra: ${password}, Celu: ${cellphone.value}, categoria: ${categoria.value}`);
    } else {
        alert("Por favor completar el registro")
    }

    return true;
}


