//objetos dentro de otro objeto

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

console.log(producto);

//acceder
console.log(producto.informacion.fabricacion.pais);