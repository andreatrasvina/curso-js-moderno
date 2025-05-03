//crear html con js

const enlace = document.querySelector('A');

//agregandole el texto
enlace.textContent = 'Nuevo enlace';

//añadiendo el href
enlace.href = '/nuevo-enlace';

//agregar nuevos atributos
enlace.target = '_blank';
enlace.setAttribute('data-enlace', 'nuevo-enlace');
enlace.classList.add('agregar-clase');

//agregar una accion
enlace.onclick = miFuncion;

console.log(enlace);

//seleccionar el lugar donde se mostrara
const navegacion = document.querySelector('.navegacion');

//navegacion.appendChild(enlace); //agregar como hijo
navegacion.insertBefore(enlace, navegacion.children[2]); 

function miFuncion() {
    alert('DISTEIS CLICK');
}


//CREAR UN CARD DE FORMA DINAMICA
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Yeyo y Yeya';
parrafo1.classList.add('categoria', 'concierto');

console.log(parrafo1);

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Boda en la playa';
parrafo2.classList.add('titulo');

console.log(parrafo2);

const parrafo3 = document.createElement('P');
parrafo3.textContent = 'Gratis';
parrafo3.classList.add('precio');

console.log(parrafo3);

//crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

console.log(info);

//crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/populares2.jpg';

console.log(imagen);

//crear el card 
const card = document.createElement('div');
card.classList.add('card');

//asignar la imagen
card.appendChild(imagen);

//asignar en info
card.appendChild(info);

console.log(card);

//insertarlo en el html
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);//se agrega al final

contenedor.insertBefore(card, contenedor.children[0]);//para agregar al inicio

