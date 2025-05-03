const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto.nombre);

//guardandolo en una variable, asi se hace de forma antigua
// const nombre = producto.nombre;
// console.log(nombre);

//nueva destructurizacion, en los corchetes va el nombre de la propiedad a extraer
const { nombre } = producto;
console.log(nombre);