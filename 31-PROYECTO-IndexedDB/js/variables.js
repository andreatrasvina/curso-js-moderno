import { generarID } from "./funciones.js";

//variables let globales tienen problemas, ecmascript modules las convierten en constantes
let editando = {
    value: false
}

//objeto de cita
const citaObj = {
    id: generarID(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: '',
    telefono: 0,
}

export {
    editando,
    citaObj
}