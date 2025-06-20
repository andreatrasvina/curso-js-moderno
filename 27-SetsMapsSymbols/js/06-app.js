//objeto a iterar
const carrito = ['producto 1', 'producto 2', 'producto 3'];

//funcion iterador
function crearIterador(carrito){
    let i = 0; //indice

    return {
        siguiente: () => {
            const fin = (i >= carrito.lenght); //cuando i sea mayor al tamaño del carrito es el fin
            const valor = !fin ? carrito[i++] : undefined; //valor actual, mientras no haya llegado al fin

            return {
                fin,
                valor
            }

        }
    }
}

//utilizar el iterador
const recorrerCarrito = crearIterador(carrito);

//se itera en la funcion siguiente
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());