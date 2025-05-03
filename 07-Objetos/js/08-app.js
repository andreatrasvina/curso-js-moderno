//congelar un objeto para no modificarlo
"use strict";

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto); // esta propiedad impide que el objeto sea modificable

// producto.disponible=false;
// producto.imagen='imagen.jpg';
console.log(producto);

console.log(Object.isFrozen(producto)); //este metodo nos inidica si un objeto esta bloqueado