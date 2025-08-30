const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cellphone = document.getElementById("cellphone");
const categoria = document.getElementById("categoria");

const isValid = true;

// Validar que esten todos los campos


if (username.value === "" || email.value === "" || password.value === "") {
    alert("Por favor, completa todos los campos.");
    return isValid = false;
}

if (isValid){
    alert("Registro completado correctamente")
}else{
    alert("Por favor completar el registro")
}

