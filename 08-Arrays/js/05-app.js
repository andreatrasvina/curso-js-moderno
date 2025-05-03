//metodos en arreglos
const meses = ['enero','febrero','marzo'];

meses[3]='abril';

//agregar al final del arreglo, sin conocer el indice
meses.push('abril');
meses.push('mayo');

// console.table(meses);

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

// .push agregar al final del array
carrito.push(producto);
carrito.push(producto2);

// .unshift agregar al inicio del array
carrito.unshift(producto);

console.table(carrito);