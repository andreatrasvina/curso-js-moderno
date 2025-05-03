//EVENTOS QUE SUCEDEN EN UN FORMULARIO

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault(); //prevenir la accion por default

    console.log('buscando...');
    console.log(e.target.action);
}