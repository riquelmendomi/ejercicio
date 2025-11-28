function capturarDatos() {
    let nombre = prompt("Ingrese su nombre completo:");
    let email = prompt("Ingrese su correo electrónico:");
    let contrasena = prompt("Ingrese su contraseña:");

    let mensajeDiv = document.getElementById('mensaje');
    let mensaje = "";   // Aquí guardamos el mensaje final
    let esError = false;

    // Validación: si algún campo está vacío
    if (!nombre || nombre.trim() === "" || !email || email.trim() === "" || !contrasena || contrasena.trim() === "") {
        mensaje = "❌ Hay campos vacíos. Por favor, complete todos los campos.";
        esError = true;
    } 
    // Validación de contraseña
    else if (contrasena.length < 8) {
        mensaje = "❌ La contraseña debe tener al menos 8 caracteres.";
        esError = true;
    } else {
        mensaje = `✅ Registro exitoso. ¡Bienvenido, ${nombre}!`;
    }

    // Mostrar mensaje en HTML y consola
    mensajeDiv.innerHTML = mensaje;
    mensajeDiv.style.color = esError ? 'red' : 'green';
    console.log(mensaje);
}
