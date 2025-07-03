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

    buscarImagenes(terminoBusqueda);
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

function buscarImagenes(terminoBusqueda){
    const key = '51163818-4c077900c7660cae16ff33ca2';
    const url = `https://pixabay.com/api/?key=${key}&q=${terminoBusqueda}&per_page=100`;

    fetch(url)
        .then(consulta => consulta.json())
        .then(imagenes => mostrarImagenes(imagenes.hits))
}

function mostrarImagenes(imagenes){

    limpiarHTML();

    //itera imgs y construye el html
    imagenes.forEach(imagen => {
        const { previewURL, likes, views, largeImageURL } = imagen;
        console.log(imagen);

        resultado.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white">
                    <img class="w-full" src="${previewURL}" />

                    <div class="p-4">
                        <p class="font-bold">${likes} <span class="font-light">Me gusta</span></p>
                        <p class="font-bold">${views} <span class="font-light">Veces vista</span></p>

                        <a 
                        class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                        href="${largeImageURL}" target="_blank" rel="noopener noreferrer">
                            Ver imagen
                        </a>
                    </div>
                </div>
            </div>
        `;
    });


}

function limpiarHTML(){
    //borra html previo
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}
