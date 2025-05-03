//imperativo modifica el objeto actual,
//declarativo no modifica el objeto

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

// .push agregar al final del array
carrito.push(producto);
carrito.push(producto2);

// .unshift agregar al inicio del array
carrito.unshift(producto3);

//ELIMINAR ULTIMO ELEMENTO DEL CARRITO
carrito.pop();

//ELIMINAR AL INICIO ELEMENTO DEL CARRITO
carrito.shift();
console.table(carrito);

//ELIMINAR CUALQUIER INDICE
carrito.splice(0,1);
console.table(carrito);

