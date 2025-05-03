const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//comprobar si un valor existe en un arreglo
meses.forEach( (mes) => {
    
    if(mes === 'Enero'){
        console.log('ENERO SI EXISTE');
    }
});

//con un array method, pero solo funciona en arrays de un solo indice o tradicional
const resultado = meses.includes('el pepe');
console.log(resultado);

//en un arreglo de objetos se usa .some
const existe = carrito.some( (producto) => {
    return producto.nombre === 'Celular';
})
console.log(existe);

//En un arreglo tradicional tambien se puede usar .some
const existe2 = meses.some( (mes) => {
    return mes === 'Febrero';
});
console.log(existe2);