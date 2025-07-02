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