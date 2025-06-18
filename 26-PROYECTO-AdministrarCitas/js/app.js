//selectores
const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#formulario-cita');

//objeto de cita
const citaObj = {
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: '',
}

//evento
pacienteInput.addEventListener('change', datosCita);
propietarioInput.addEventListener('change', datosCita);
emailInput.addEventListener('change', datosCita);
fechaInput.addEventListener('change', datosCita);
sintomasInput.addEventListener('change', datosCita);

formulario.addEventListener('submit', submitCita);


function datosCita(e){
    citaObj[e.target.name] = e.target.value;

    console.log(citaObj);
}

function submitCita(e) {
    e.preventDefault();

    if(Object.values(citaObj).some(valor => valor.trim() === "")){
        const notificacion = new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'error'
        });
        return;
    }
}

class Notificacion {
    constructor({texto, tipo}){
        this.texto = texto;
        this.tipo = tipo;

        this.mostrar();
    }

    mostrar(){
        const alerta = document.createElement('DIV');
        alerta.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'alert', 'uppercase', 'font-bold', 'text-sm');

        this.tipo === 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500');

        //elimina alerta duplicada, optional chaning (signo de interrogacion pregunta si existe)
        const alertaPrevia = document.querySelector('.alert'); //identifica si esta la clase alert 
        alertaPrevia?.remove();//si existe elimina la alerta previa


        //se agrega el mensaje
        alerta.textContent = this.texto;
 
        //insertar en el dom(que inserta, antes de cual se inserta)
        formulario.parentElement.insertBefore(alerta, formulario);

        //eliminar alerta despues de 5s
        setTimeout(() => {
            alerta.remove();
        }, 4000);
    }
}