//eliminar elementos del DOM
//existen dos maneras: eliminarlo por si mimso y eliminarlo mediante el padre

//por si mismo
const primerEnlace = document.querySelector('a');
primerEnlace.remove();
console.log(primerEnlace);

//referencia desde el padre
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[2]);