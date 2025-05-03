//metodos para strings
const producto = 'Monitor 3 pulgadas';

console.log(producto);

//reemplzar una palabra
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

//slice, cortar una cadena de texto, desde que caracter inicia al que termina
console.log(producto.slice(0, 10));
//mantiene lo que hay despues del caracter
console.log(producto.slice(8));

//no corta hacia atras: error
console.log(producto.slice(8, 1));

//alternativa a slice
console.log(producto.substring(0, 10));
//tienen la misma funcionalidad pero toma siempre el numero mas pequeño para empezar a cortar 
console.log(producto.substring(8, 1));

//cuando aparece la letra inicial del nombre de un usuario se hace este codigo:
const usuario = "Yeya"; 
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));