//concatenacion
const producto = 'Monitor pepongoso ';
const precio = '30USD ';

console.log(producto.concat(precio));
console.log(producto.concat('En descuento'));

console.log(producto + precio);
console.log(producto + 'con valor de: ' + precio);
console.log(producto , 'con valor de: ' , precio);

console.log(`El producto ${producto} tiene un valor de $ ${precio}`)