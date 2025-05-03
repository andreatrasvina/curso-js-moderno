//SELECCIONAR ELEMENTOS POR SU CLASE

const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// SI LAS CLASES EXISTEN MAS DE UNA VEZ
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

// SI LAS CLASES NO EXISTEN
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);