// Función para validar el login
function validarLogin(userIngresado, passIngresada, usuario, contrasena) {
    return (userIngresado === usuario && passIngresada === contrasena);
}

// Función para mostrar el menú de productos
function mostrarMenu() {
    const listaProductos = productos.map(producto => `${producto.codigo} : ${producto.nombre} $${producto.precio}`).join("\n");
    return parseInt(prompt("Ingrese el código del producto que desea comprar. \n" + listaProductos));   
}

// Función para realizar la compra
function realizarCompra() {
    let seguirComprando = true;
    let carrito = 0;
    
    while (seguirComprando) {
        let codProd = mostrarMenu();
        
        // Verificación del valor numérico que eligió el usuario
        if (codProd !== null && !isNaN(codProd) && codProd !== 0) {  // Verificamos que no sea 0
            let productoElegido = productos.find((producto) => producto.codigo === codProd);
            
            if (!productoElegido) {   // Si el número de código no existe
                alert("Ingresó un número inválido.");
            } else {  // Si existe, agregar a carrito y sumarlo
                carrito += productoElegido.precio; 
                alert(`Producto agregado: ${productoElegido.nombre} - $${productoElegido.precio}`);
            }

        } else {
            alert("No ingresó un número válido.");
        }
        
        // Consultar si desea seguir comprando
        seguirComprando = confirm("¿Desea seguir comprando?");
    }
    
    alert(`Compra finalizada. El total de su carrito es: $${carrito}`);
};