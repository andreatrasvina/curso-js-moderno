//query selector all
// sintaxis tipo css

//seleccionar por clase
const cards = document.querySelectorAll('.card');
console.log(cards);

//seleccionar por id
const formularios = document.querySelector('#formulario');
console.log(formularios);

//si un elemento no existe
const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste);