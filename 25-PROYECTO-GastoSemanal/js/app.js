//variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');




//eventos

eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
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

}