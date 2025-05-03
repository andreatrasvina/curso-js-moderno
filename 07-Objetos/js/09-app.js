//sellar un objeto
"use strict";

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

Object.seal(producto); // metodo no permite agregar nuevas propiedades 
                       // ni eliminarlas, pero si modificarlas

producto.disponible=false;
// producto.imagen='imagen.jpg';
// delete producto.precio;

console.log(producto);

console.log(Object.isSealed(producto)); //saber si un objeto esta sellado

