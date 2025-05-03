//metodos para strings
const producto = '            Monitor espongoso';

console.log(producto);
console.log(producto.length);

//eliminar los espacios al inicio de la cadena
console.log(producto.trimStart());
console.log(producto.trimEnd());

//metodos en cadena o chaining
console.log(producto.trimStart().trimEnd());

console.log(producto.trim());
