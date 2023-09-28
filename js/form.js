function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;

    if (nombre.trim() === "") {
        alert("Por favor, ingrese su nombre.");
        return false;
    }

    if (!validarEmail(email)) {
        alert("Por favor, ingrese una dirección de correo electrónico válida.");
        return false;
    }

    return true;
}

function validarEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}