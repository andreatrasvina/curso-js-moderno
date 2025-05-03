//arreglo vacio
const carrito = [];

const producto = {
    nombre: 'Monitor de 3 pulgadas',
    precio: 400
}

const producto2 = {
    nombre: 'Celular sansun',
    precio: 1400
}

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

//crear un nuevo arreglo con el spread operator, forma declarativa
let resultado;

resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];

console.table(resultado);