// DATOS DEL USUARIO
let usuario = "patricio";
let contrasena = "patito123";

// SOLICITAR LOGIN
let usuarioIngresado = prompt("Ingrese el nombre de usuario");
let contrasenaIngresada = prompt("Ingrese su contraseña");

// VERIFICAR LOGIN
if (usuarioIngresado != "" && contrasenaIngresada != "") {
    if (validarLogin(usuarioIngresado, contrasenaIngresada,usuario, contrasena)) { 
        realizarCompra(); // Llamar a la función para realizar la compra
    } else {
        alert("Usuario y/o contraseña incorrectas. Recarga la página.");
    }
} else {
    alert("Debes ingresar todos los datos. Recarga la página.");
}
