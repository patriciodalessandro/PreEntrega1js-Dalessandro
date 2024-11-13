// 1. Función para validar el login
function validarLogin(userIngresado, passIngresada, usuario, contrasena) {
    return (userIngresado === usuario && passIngresada === contrasena);
}

// 2. Función para mostrar el menú de productos
function mostrarMenu() {
    const listaProductos = productos.map(producto => `${producto.codigo} : ${producto.nombre} $${producto.precio}`).join("\n");
    return parseInt(prompt("Ingrese el código del producto que desea comprar. \n" + listaProductos));   
}

// 3. Declaración de la clase ProductoCarrito, son los objetos que agregaría al carrito que los saco de listaProductos como productoElegido
class ProductoCarrito {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.cantidad = 1;
        this.precio = precio;
        this.total = precio; 
    }

    // Método para incrementar la cantidad y actualizar el total
    agregarUnidad() {
        this.cantidad++;
        this.total = this.cantidad * this.precio;
    }
}


// 4. Función para realizar la compra
function realizarCompra() {
    let seguirComprando = true;
    let carrito = []; // El carrito ahora es un array de instancias de ProductoCarrito

    while (seguirComprando) {
        let codProd = mostrarMenu();

        // Verificación del valor numérico que eligió el usuario
        if (codProd !== null && !isNaN(codProd) && codProd !== 0) {
            let productoElegido = productos.find((producto) => producto.codigo === codProd);

            if (!productoElegido) {  // Si el número de código no existe
                alert("Ingresó un número inválido.");
            } else {  // Si el producto existe
                // Buscar si el producto ya está en el carrito
                let productoEnCarrito = carrito.find(item => item.nombre === productoElegido.nombre);
                
                if (productoEnCarrito) {  // Si ya existe, aumentar la cantidad
                    productoEnCarrito.agregarUnidad(); // Usar el método de la clase para agregar una unidad
                } else {  // Si no está en el carrito, agregarlo
                    carrito.push(new ProductoCarrito(productoElegido.nombre, productoElegido.precio));
                }
            }
        } else {
            alert("No ingresó un número válido.");
        }

        // Consultar si desea seguir comprando
        seguirComprando = confirm("¿Desea seguir comprando?");
    }

    // Calcular el total de la compra sumando los totales de todos los productos en el carrito
    let totalCompra = carrito.reduce((total, productoCarrito) => total + productoCarrito.total, 0);

    // Mostrar el carrito y el total final
    let resumenCompra = carrito.map(productoCarrito => `${productoCarrito.nombre} - Cantidad: ${productoCarrito.cantidad} - - Precio por Unidad: $${productoCarrito.precio} Total: $${productoCarrito.total}`).join("\n");
    alert(`Compra finalizada. Los productos seleccionados:\n${resumenCompra}\nTotal de la compra: $${totalCompra}`);
};
