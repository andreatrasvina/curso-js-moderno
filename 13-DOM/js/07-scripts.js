//cambiar todas las propiedades del css 

const encabezado = document.querySelector('h1');
console.log(encabezado.style);

// en css              -      en js
//background-color            backgroundColor

encabezado.style.backgroundColor = 'red';

encabezado.style.fontFamily = 'Arial';

encabezado.style.textTransform = 'uppercase';

//agregar una clase de un elemento
const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'otra-clase');
console.log(card.classList);

//eliminar una clase de un elemento
card.classList.remove('otra-clase');
console.log(card.classList);