// para obtenr valores del local storage

const nombre = localStorage.getItem('nombre');
console.log(nombre);

//objeto
const productoJSON = localStorage.getItem('producto');
console.log(productoJSON);

//para comvertir el string en objeto de nuevo:
console.log(JSON.parse(productoJSON));

//arrays
const mesesJSON = localStorage.getItem('meses');
console.log(JSON.parse(mesesJSON));
