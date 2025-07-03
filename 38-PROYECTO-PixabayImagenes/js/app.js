const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e){
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;

    if(terminoBusqueda === ''){
        mostrarAlerta('error', 'Debes agregar un texto de busqueda');
        return;
    }
}

function mostrarAlerta(tipo, mensaje){

    const existe = document.querySelector('.existe');

    if(!existe){

        if(tipo === 'error'){
            
            const alerta = document.createElement('P');
            alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'existe');
    
            alerta.innerHTML = `
                <strong class="font-bold">ERROR:</strong>
                <span class="block sm:inline">${mensaje}</span>
            `;
    
            formulario.appendChild(alerta);
    
            setTimeout(() => {
                alerta.remove();
            }, 3000);
        }

    }

}
