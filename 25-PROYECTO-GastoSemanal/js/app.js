//variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');




//eventos

eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto);
}

//classes
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
}

let presupuesto;


class UI {

    insertarPresupuesto(cantidad){
        //extraer los valores del objeto
        const {presupuesto, restante} = cantidad;

        //se inyectan en el html
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;

    }

    imprimirAlerta(mensaje, tipo){
        //crar el div
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('text-center', 'alert');
        
        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        //mensaje de error
        divMensaje.textContent = mensaje;

        //inyectar el mensaje con before(lo que se inserta, donde)
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        //quitarlo
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}

const ui = new UI();

//funciones

function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('cual es tu presupuesto?');

    console.log(Number(presupuestoUsuario));

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario || presupuestoUsuario <= 0)){
        window.location.reload();
    }

    //instanciar cuando ya es un presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto);

}

//añade gastos
function agregarGasto(e){
    e.preventDefault();

    //leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = document.querySelector('#cantidad').value;

    //validacion
    if(nombre === '' || cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');

        return;
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no valida', 'error');

        return;
    }
}