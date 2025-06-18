//selectores
const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#formulario-cita');
const contenedorCitas = document.querySelector('#citas');

//objeto de cita
const citaObj = {
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: '',
}

//eventos
pacienteInput.addEventListener('change', datosCita);
propietarioInput.addEventListener('change', datosCita);
emailInput.addEventListener('change', datosCita);
fechaInput.addEventListener('change', datosCita);
sintomasInput.addEventListener('change', datosCita);

formulario.addEventListener('submit', submitCita);

//clases
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

class AdminCitas{
    constructor(){
        this.citas = [];

    }

    agregar(citas){
        this.citas = [...this.citas, citas];
        //console.log(this.citas);
        this.mostrar();
    }

    mostrar(){
        //limpiar HTML previo
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }

        //generando las citas
        this.citas.forEach(cita => {
            
            const divCita = document.createElement('div');
            divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10' ,'rounded-xl', 'p-3');
        
            const paciente = document.createElement('p');
            paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.paciente}`;
        
            const propietario = document.createElement('p');
            propietario.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${cita.propietario}`;
        
            const email = document.createElement('p');
            email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.email}`;
        
            const fecha = document.createElement('p');
            fecha.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fecha}`;
        
            const sintomas = document.createElement('p');
            sintomas.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;
        
            // Agregar al HTML
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            contenedorCitas.appendChild(divCita);
        });
    }

}


//funciones
function datosCita(e){
    citaObj[e.target.name] = e.target.value;
    //console.log(citaObj);
}

const citas = new AdminCitas();

function submitCita(e) {
    e.preventDefault();

    if(Object.values(citaObj).some(valor => valor.trim() === "")){
        const notificacion = new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'error'
        });
        return;
    }

    citas.agregar({...citaObj});

    //reinicia el texto de los inputs
    formulario.reset();

    //reinicia el objeto
    reiniciarObjCita();

    //mensaje de exito
    new Notificacion({
        texto: 'La cita se registro correctamente',
        tipo: 'exito'
    });
}

function reiniciarObjCita(){

    citaObj.paciente = '';
    citaObj.propietario = '';
    citaObj.email = '';
    citaObj.fecha = '';
    citaObj.sintomas = '';

    //otra manera de hacerlo con asign, (que objeto se asignara, { por que contenido se reemplazara})
    // Object.assign(citaObj, {
    //     paciente: '',
    //     propietario: '',
    //     email: '',
    //     fecha: '',
    //     sintomas: '',
    // });
}