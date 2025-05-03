const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

//para acceder al contenido de un texto
console.log(encabezado.innerText); //si la propiedad en css esta visibility: hidden, el texto no se muestra

console.log(encabezado.textContent); //si se muestra el texto aunque la visibilidad este escondida

console.log(encabezado.innerHTML); // se trae el html

// tambien se puede aplicar chaning o encadenamiento
const encabezado2 = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado2);

//MODIFICAR EL TEXTO
const nuevoHeading = 'Nuevo texto'
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

//MODIFICAR LA IMAGEN
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';