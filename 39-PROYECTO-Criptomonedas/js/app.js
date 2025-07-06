
const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}

//promise que resuelve al cargar las criptomonedas
const obtenerCriptomonedas = criptomonedas => new Promise( resolve => {
        resolve(criptomonedas);
});


document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();

    formulario.addEventListener('submit', calcularCriptomoneda);

    criptomonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
})

function consultarCriptomonedas(){
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`

    fetch(url)
        .then(consulta => consulta.json())
        .then(resultado => obtenerCriptomonedas(resultado.Data))
        .then(criptomonedas => selectCriptomonedas(criptomonedas))
}

//llenando el select de options con el nombre de la criptocoin
function selectCriptomonedas(criptomonedas){
    criptomonedas.forEach(criptomoneda => {
        console.log(criptomoneda.CoinInfo.Name);

        const { FullName, Name } = criptomoneda.CoinInfo;
        const option = document.createElement('OPTION');
        option.value = Name;
        option.textContent = FullName;

        criptomonedasSelect.appendChild(option);
    });
}

function leerValor(e){
    objBusqueda[e.target.name] = e.target.value;
    //console.log(objBusqueda);
}

function calcularCriptomoneda(e){
    e.preventDefault();

    //validar form
    const { moneda, criptomoneda } = objBusqueda;

    if(moneda === '' || criptomoneda === ''){
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }

    //consultar api
    consultarApi();
}

function consultarApi(){
    const { moneda, criptomoneda } = objBusqueda;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    fetch(url)
        .then(consulta => consulta.json())
        .then(cotizacion => console.log(cotizacion.DISPLAY[criptomoneda][moneda]))
}

function mostrarAlerta(mensaje){

    const error = document.querySelector('.error');

    if(!error){

        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('error');
        divMensaje.textContent = mensaje;
    
        formulario.appendChild(divMensaje);
    
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);

    }

}