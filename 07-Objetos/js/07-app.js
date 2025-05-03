//las constantes no pueden cambiar sus valores,
// pero los objetos cont si pueden cambiar el valor de sus propiedades

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

producto.disponible = false;

console.log(producto);