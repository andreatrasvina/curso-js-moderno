//selectores
const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#formulario-cita');
const formularioInput = document.querySelector('#formulario-cita input[type="submit"]');

const contenedorCitas = document.querySelector('#citas');

const btnEditar = document.querySelector('.btn-editar');

let editando = false;

//objeto de cita
const citaObj = {
    id: generarID(),
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

    editar(citaActualizada){
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita );
        this.mostrar();
    }

    eliminar(id){
        this.citas = this.citas.filter( cita => cita.id !== id);
        this.mostrar();
    }

    mostrar(){
        //limpiar HTML previo
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }

        //si hay citas
        if(this.citas.length === 0){
            contenedorCitas.innerHTML = '<p class="text-xl mt-5 mb-10 text-center">No Hay Pacientes</p>';
            return
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

            //btns para eliminar y editar
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2', 'btn-editar');
            btnEditar.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'
            //event handler en vez de un event listener
            const clone = {...cita}
            btnEditar.onclick = () => cargarEdicion(clone);

            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
            btnEliminar.onclick = () => this.eliminar(cita.id);

            const contenedorBtns = document.createElement('DIV');
            contenedorBtns.classList.add('flex', 'justify-between', 'mt-10');

            contenedorBtns.appendChild(btnEditar);
            contenedorBtns.appendChild(btnEliminar);

            // Agregar al HTML
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);

            divCita.appendChild(contenedorBtns);

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

    if(editando){
        citas.editar({...citaObj})
        new Notificacion({
            texto: 'Editado correctamente',
            tipo: 'exito'
        });
    }else {
        citas.agregar({...citaObj});//le pasamos una copia en vez de moficiar el obj original
        new Notificacion({
            texto: 'La cita se registro correctamente',
            tipo: 'exito'
        });
        
    }

    //reinicia el texto de los inputs
    formulario.reset();

    //reinicia el objeto
    reiniciarObjCita();

    editando = false;
}

function reiniciarObjCita(){

    citaObj.id = generarID();
    citaObj.paciente = '';
    citaObj.propietario = '';
    citaObj.email = '';
    citaObj.fecha = '';
    citaObj.sintomas = '';

    formularioInput.value = 'Registrar paciente';

    //otra manera de hacerlo con asign, (que objeto se asignara, { por que contenido se reemplazara})
    // Object.assign(citaObj, {
    //     id: generarID(),
    //     paciente: '',
    //     propietario: '',
    //     email: '',
    //     fecha: '',
    //     sintomas: '',
    // });
}

function generarID(){
    return Math.random().toString(36).substring(2) + Date.now();
}

function cargarEdicion(cita){
    Object.assign(citaObj, cita);

    pacienteInput.value = cita.paciente;
    propietarioInput.value = cita.propietario;
    emailInput.value = cita.email;
    fechaInput.value = cita.fecha;
    sintomasInput.value = cita.sintomas;

    editando = true;

    formularioInput.value = 'Guardar cambios';

}