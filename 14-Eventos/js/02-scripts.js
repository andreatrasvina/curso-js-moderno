//EVENTOS DE MOUSE

const nav = document.querySelector('.navegacion');

//registrar un evento
nav.addEventListener('click', () => {
    console.log('click en nav');
})

nav.addEventListener('mouseenter', () => {
    console.log('el cursor paso por el nav');
    nav.style.backgroundColor = 'red';
})

nav.addEventListener('mouseout', () => {
    console.log('el cursor salio del nav');
    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('mousedown', () => {
    console.log('presionaste');
})

nav.addEventListener('mouseup', () => {
    console.log('dejaste de presionar');
})

nav.addEventListener('dblclick', () => {
    console.log('doble click');
})