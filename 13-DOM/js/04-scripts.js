//QUERY SELECTOR
// solo retorna el primero que encuentre, maximo 1 elemento

//seleccionar por clase
const card = document.querySelector('.card');
console.log(card);

//podemos tener selectores especificos como ene css
const info = document.querySelector('.premium .info');
console.log(info);

//seleccionar el segundo card de hospedaje
// const segundaCard = document.querySelector('section.hospedaje .card:nth-child(2)');
// console.log(segundaCard);

//seleccionar por id
const formulario = document.querySelector('#formulario');
console.log(formulario);

//seleccionar elementos hmtl
const navegacion = document.querySelector('nav');
console.log(navegacion);
