const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

//guardandolo en una variable, asi se hace de forma antigua
// const nombre = producto.nombre;
// console.log(nombre);

//destructuring, sacar de la estructura
const { nombre } = producto;
console.log(nombre);


//destructuring en arreglos
const numeros = [10,20,30,40,50];

const [ , , tercerValor] = numeros;
const [ , , ...tercero] = numeros;

console.log(tercero);