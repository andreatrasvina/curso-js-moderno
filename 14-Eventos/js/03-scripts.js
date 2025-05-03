//EVENTOS QUE SUCEDEN EN EL TECLADO

const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('keydown', () => {
//     console.log('presionaste una tecla');
// })

// busqueda.addEventListener('keyup', () => {
//     console.log('soltaste una tecla');
// })

// busqueda.addEventListener('blur', () => {
//     console.log('seleccionaste el elemento pero te saliste de el');
// })

// busqueda.addEventListener('copy', () => {
//     console.log('copiaste el texto');
// })

// busqueda.addEventListener('paste', () => {
//     console.log('pegaste un texto');
// })

// busqueda.addEventListener('cut', () => {
//     console.log('cortaste un texto');
// })

// busqueda.addEventListener('input', () => {
//     console.log('realizando cualquier entrada o accion');
// })

//RECUPERAR UNA ENTRADA DE TEXTO
busqueda.addEventListener('input', (e) => {
    
    if(e.target.value === ''){
        console.log('fallo la validacion');
    }
    
    console.log(e.target.value);
})