//ASIGNAR DATOS EN LOCAL STORAGE

localStorage.setItem('nombre', 'yeya');

sessionStorage.setItem('nombre', 'yeya');

//local storage solo soporta strings, eso quiere decir que no se pueden guardar arrays, objetos, etc

//objeto normal
const productos = {
    nombre: 'monitor de 60 pulgadas',
    precio: 2000,
}

//pero existe un metodo json stringify para convertir el obj en un string
const productosString = JSON.stringify(productos);

//asi s eguarda el objeto
localStorage.setItem('producto', productosString);

//en arrays con json stringify
const meses = ['enero', 'mayo', 'septiembre'];
const mesesString = JSON.stringify(meses);

localStorage.setItem('meses', mesesString);