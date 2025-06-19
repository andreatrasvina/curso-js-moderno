// SETS
// Los objetos Set son colecciones de valores. 
// Puede iterar a través de los elementos de un conjunto en orden de inserción. 
// Un valor en un Set solo puede ocurrir una vez; es único en la colección del Set. No se repiten.
// no son llave - valor, aqui son lo mismo

const carrito = new Set();

//add para agregar valores al set
carrito.add('Camisa');
carrito.add('Vestido');
carrito.add('Blusa');
carrito.add('Camisa'); //si se repite no se guarda en el set

//has comprueba que exista
console.log(carrito.has('Camisa'));
console.log(carrito.has('Collar'));

//eliminar valor
carrito.delete('Camisa');


//eliminar todo el set 
//carrito.clear();

//iterar sobre el set
for (let producto of carrito) console.log(producto)
//o
carrito.forEach(producto => {
    console.log(producto);
});


console.log(carrito.size);
console.log(carrito);

//EJEMPLO:
//del siguiente arreglo elimina los duplicados
//en vez de un metodo burbuja
const numeros = [10, 20, 20, 30, 40, 50, 10];

const noDuplicados = new Set(numeros);
console.log(noDuplicados);