//FINDINDEZ PARA ENCONTRAR EL INDICE DE UN ELEMENTO, SOLO LA PRIMER COINCIDENCIA ENCONTRADA

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//con un foreach se haria de la siguiente manera
meses.forEach( (mes, i) => {
    if(mes === 'Enero'){
        console.log(mes+' encontrado en el indice '+i);
    }
});

//con un array method
const indice = meses.findIndex( (mes) => {
    return mes === 'Abril';
});
console.log(indice);

//ENCONTRAR INDICE DE UN ARREGLO DE OBJETOS
const indice2 = carrito.findIndex( (producto, i) => {
    return producto.precio === 100;
});
console.log(indice2);