// array method every, todos los elementos del arreglo deben de cumplir esa condicion
//para que retorne un true

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//todos los elementos deben cumplir con la condicion, es como AND
const resultado = carrito.every( (producto) => {
    return producto.precio < 500;
});

console.log(resultado);

// .some Al menos uno cumpla con la condicion, es como OR
const resultado2 = carrito.some( (producto) => {
    return producto.precio < 500;
});

console.log(resultado2);