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

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    //reduce va acumulando o iterando sobre el arreglo y entrega un total
    calcularRestante(){ //el total se ira calculando con la suma de gasto, iniciando en 0
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);//total gastado

        this.restante = this.presupuesto - gastado;
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

    agregarGastoListado(gastos){

        this.limpiarHTML(); //elimina el html previo

        //iterar sobre los gastos
        gastos.forEach(gasto => {
            
            const {nombre, cantidad, id} = gasto;

            //crear li
            const nuevoGasto = document.createElement('LI');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id;

            //agregar el html del gasto
            nuevoGasto.innerHTML = ` ${nombre} <span class="badge badge-primary badge-pill"> $${cantidad} </span>`;

            //btn para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = '&times;';

            nuevoGasto.appendChild(btnBorrar);

            //agregar al html
            gastoListado.appendChild(nuevoGasto);

        });
    }

    limpiarHTML() {
        gastoListado.innerHTML = '';
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
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
    const cantidad = Number(document.querySelector('#cantidad').value);

    //validacion
    if(nombre === '' || cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');

        return;
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no valida', 'error');

        return;
    }

    //generar obj con la informacion de gasto
    const gasto = {
        nombre, 
        cantidad, 
        id: Date.now() 
    } //lo contrario de destructuring, este une los elementos

    //añade un nuevo gasto
    presupuesto.nuevoGasto(gasto);

    ui.imprimirAlerta('Gasto agregado correctmanete');

    //imiprimir los gastos
    const {gastos, restante } = presupuesto;
    ui.agregarGastoListado(gastos);

    ui.actualizarRestante(restante);

    //borrar las entradas de texto
    formulario.reset();

}