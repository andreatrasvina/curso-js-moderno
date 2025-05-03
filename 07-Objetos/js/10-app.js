//UNIR 2 OBJETOS

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto);
console.log(medidas);

const union = Object.assign(producto, medidas);
console.log(union);

//SPREAD OPERATOR O REST OPERATOR, copia los objetos
const copia = { ...producto, ...medidas}
console.log(copia);