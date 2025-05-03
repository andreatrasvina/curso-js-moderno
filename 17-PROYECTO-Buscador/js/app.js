//variables inputs
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//contenedor para los rewsultados
const resultado = document.querySelector('#resultado');

//select options de años
const max = new Date().getFullYear();
const min = max - 10;

//generar un obj en base a la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); // muestra los automoviles al cargar

    //llena las opciones de años
    llenarSelect();
});

//event listener para los selects
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt( e.target.value );

    filtrarAuto();
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;

    filtrarAuto();
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;

    filtrarAuto();
});

//funciones
function mostrarAutos(autos){

    limpiarHTML();//elimina el html previo

    autos.forEach(auto => {

        //destructurizacion de un objeto
        const {marca, modelo, year, precio, puertas, color, transmision} = auto;

        const autoHTML = document.createElement('P');

        autoHTML.textContent = `
            ${auto.marca} ${modelo} ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: $${precio} - Color: ${color}
        `;

        //se inyecta en el html
        resultado.appendChild(autoHTML);
    });

}

//limpiar html
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function llenarSelect(){
    for(let i=max; i>=min; i--){
        console.log(i);
        const opcion = document.createElement('OPTION');
        opcion.value = i;
        opcion.textContent = i;

        //inyeccion
        year.appendChild(opcion);

    }
}

//funcion que filtra en base a la busqueda
function filtrarAuto(){
    const resultado = autos.filter( filtrarMarca ).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor); //funcion de alto nivel: una funcion que toma otra funcion
    //console.log(resultado);

    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
}

function noResultado(){

    limpiarHTML();
    
    const noResultado = document.createElement('DIV');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados';

    resultado.appendChild(noResultado);

}

function filtrarMarca(auto){
    
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}

function filtrarYear(auto){

    const {year} = datosBusqueda; //destructurizacion para no poner el obj.year

    if(year){
        return auto.year === year;
    }
    return auto;
}

function filtrarMinimo(auto){

    const {minimo} = datosBusqueda; //destructurizacion para no poner el obj.year

    if(minimo){
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto){

    const {maximo} = datosBusqueda;

    if(maximo){
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto){

    const {puertas} = datosBusqueda;

    if(puertas){
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTransmision(auto){

    const {transmision} = datosBusqueda;

    if(transmision){
        return auto.transmision === transmision;
    }
    return auto;
}


function filtrarColor(auto){

    const {color} = datosBusqueda;

    if(color){
        return auto.color === color;
    }
    return auto;
}