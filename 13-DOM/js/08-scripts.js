// TRAVERSING THE DOM O RECORRER EL DOM, NAVEGAR POR LOS DIFERENTES ELEMENTOS

const navegacion = document.querySelector('.navegacion');

console.log(navegacion);

console.log(navegacion.firstElementChild); //primero elemento de los hijos
console.log(navegacion.lastElementChild); //ultimo elemento de los hijos

console.log(navegacion.childNodes); //los saltos de linea son considerados elementos
console.log(navegacion.children); //este si solo enlista elementos reales, solo hmtl

//seleccionar un elemento especifico
console.log(navegacion.children[0]);


const card = document.querySelector('.card');

card.children[1].children[1].textContent = 'Nuevo heading desde traversing the dom';
card.children[0].src = 'img/hacer3.jpg';

console.log(card.children[0]);

//TRAVERSING DE HIJO A PADRE
//tambien se puede navegar desde abajo hasta arriba, del hijo al padre
console.log(card.parentNode);//toma en cuenta los elementos en blanco, saltos de linea
console.log(card.parentElement);//solo toma en cuenta elementos validos del html
console.log(card.parentElement.parentElement.parentElement);

//CON CHILDREN SE NAVEGA HASTA LOS HIJOS
//CON PARENT SE NAVEGA HASTA LOS PADRES

//para navegar entre hermanos, elementos de un mismo padre o misma jerarquia
//siguiente elemento
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

//anterior elemento
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);