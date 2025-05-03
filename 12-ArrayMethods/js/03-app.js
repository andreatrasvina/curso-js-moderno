//.REDUCE
//tomar una gran cantidad de datos y unirlos para entregar un resultado
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//con un for each seria de la siguiente manera
let total = 0;
carrito.forEach( (producto) => {
    return total += producto.precio;
})

console.log(total);

//con un .reduce
let resultado = carrito.reduce( (total,producto) => total + producto.precio, 0);

console.log(resultado);