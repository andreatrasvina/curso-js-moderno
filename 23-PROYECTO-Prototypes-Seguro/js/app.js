
//constructor: los elementos del formulario
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//interfaz
function UI(){}

//llena el select de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
          min = max - 20;

    const selectYear = document.querySelector('#year');
    for(let i=max; i>min; i--){
        let option = document.createElement('option');
        option.value=i;
        option.textContent=i;
        selectYear.appendChild(option);
    }
}

//muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('DIV');

    if(tipo === 'error'){
        div.classList.add('error');
    }else{
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');//escribir menos codigo, igual que tenerlo en el if de arriba
    div.textContent = mensaje;

    //insertar en el html
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    //eliminar el mensaje desp de 3 segundos
    setTimeout(() => {
        div.remove();
    }, 3000);
}

//instanciar UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); // llena el select con los años
});


eventListeners();
function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();

    //leer la marca seleccionada
    const marca = document.querySelector('#marca').value;

    //leer el año seleccionado
    const year = document.querySelector('#year').value;

    //leer el tipo de seguro
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if( marca === '' || year === '' || tipo === '' ){
        ui.mostrarMensaje('Todos los campos son necesarios', 'error');
    }else {
        ui.mostrarMensaje('Cotizando...', 'correcto');
    }

    console.log('cotizando...');
}