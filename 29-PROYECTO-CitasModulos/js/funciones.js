import { citaObj, editando } from "./variables.js";
import AdminCitas from './classes/AdminCitas.js';
import Notificacion from './classes/Notificacion.js';
import { formulario, formularioInput, pacienteInput, propietarioInput, emailInput, fechaInput, sintomasInput, telefonoInput  } from "./selectores.js";

const citas = new AdminCitas();
//funciones
export function datosCita(e){
    citaObj[e.target.name] = e.target.value;
    //console.log(citaObj);
}


export function submitCita(e) {
    e.preventDefault();

    if(Object.values(citaObj).some(valor => valor.trim() === "" || citaObj.telefono === 0)){
        const notificacion = new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'error'
        });
        return;
    }

    if(editando.value){
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

    editando.value = false;
}

export function reiniciarObjCita(){

    citaObj.id = generarID();
    citaObj.paciente = '';
    citaObj.propietario = '';
    citaObj.email = '';
    citaObj.fecha = '';
    citaObj.sintomas = '';
    citaObj.telefono = 0;

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

export function generarID(){
    return Math.random().toString(36).substring(2) + Date.now();
}

export function cargarEdicion(cita){
    Object.assign(citaObj, cita);

    pacienteInput.value = cita.paciente;
    propietarioInput.value = cita.propietario;
    emailInput.value = cita.email;
    fechaInput.value = cita.fecha;
    sintomasInput.value = cita.sintomas;
    telefonoInput.value = cita.telefono;

    editando.value = true;

    formularioInput.value = 'Guardar cambios';

}