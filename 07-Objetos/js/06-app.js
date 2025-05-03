//destructurizacion en objetos grandes

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
        peso: '1kg',
        medida: '1m'
        },
        fabricacion: {
            pais: 'china'
        }
    }
}

//destructuring
const {nombre, informacion, informacion: { fabricacion: { pais } } } = producto;
console.log(pais);