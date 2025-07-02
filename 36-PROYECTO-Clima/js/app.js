const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {

    formulario.addEventListener('submit', buscarClima);
})

function buscarClima(e){
    e.preventDefault();

    console.log('buscando el clima...');

    //validar formulario
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if(ciudad === '' || pais === ''){
        mostrarMensaje('error', 'Ambos campos son obligatorios');

        return;
    }

    //despues se consulta
    consultarAPI(ciudad, pais);
}

function mostrarMensaje(tipo, mensaje){

    const obligatorio = document.querySelector('.obligatorio');

    if(!obligatorio){

        if(tipo==='error'){
            const alerta = document.createElement('DIV');
            alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center', 'obligatorio')
            
            alerta.innerHTML = `
                <strong class="font-bold">ERROR 404</strong>
                <span class="block">${mensaje}</span>
            `;
    
            setTimeout(() => {
                alerta.remove();
            }, 3000);
    
            container.appendChild(alerta);
        }

    }

}

function consultarAPI(ciudad, pais){

    const APIKEY = '00ca681d6f5d7978e4ade8a433716cbf';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${APIKEY}`;
    const completeUrl = url.replace(/\s/g, '%20')
    
    //console.log(completeUrl);

    fetch(completeUrl)
        .then(consulta => consulta.json())
        .then(datos => {

            limpiarHTML(); //limpia antes de que se muestre cualquier otro resultado, ya se error o no

            if(datos.cod === "404"){
                mostrarMensaje('error', 'Ciudad no encontrada');
                return;
            }

            //imprime la respuesta en el html
            mostrarClima(datos);
        })
}

function mostrarClima( { main: { temp, temp_max, temp_min }} ){

    const tempActual = kelvinACentigrados(temp);
    // const temp_max = kelvinACentigrados(temp_max);
    // const temp_min = kelvinACentigrados(temp_min);

    const actual = document.createElement('P');
    actual.innerHTML = `${tempActual} &#8451;`;
    actual.classList.add('font-bold', 'text-6xl');

    const resultadoDiv = document.createElement('DIV');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(actual);

    resultado.appendChild(resultadoDiv);

}

const kelvinACentigrados = (temperatura) => parseInt(temperatura - 273.15);

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}