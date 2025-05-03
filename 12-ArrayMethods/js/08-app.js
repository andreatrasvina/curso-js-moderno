//REST O SPREAD OPERATOR

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//esta forma no modifica el arreglo original, crea uno nuevo
const resultado = [...meses, 'Agosto'];
console.log(resultado);

meses.push('Agosto'); //ESTO SI MODIFICA EL ARREGLO ORIGINAL
console.log(meses);

const producto = { nombre: 'Memoria peposa', precio: 100000 };

const carrito2 = [...carrito, producto];

console.log(carrito2);
