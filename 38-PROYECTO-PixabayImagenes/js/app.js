const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const paginacionDiv = document.querySelector('#paginacion');

const registrosPorPagina = 40;
let totalPaginas;
let iterador;

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
    const url = `https://pixabay.com/api/?key=${key}&q=${terminoBusqueda}&per_page=${registrosPorPagina}`;

    fetch(url)
        .then(consulta => consulta.json())
        .then(imagenes => {
            totalPaginas = calcularPaginas(imagenes.totalHits);
            // console.log(totalPaginas);
            mostrarImagenes(imagenes.hits)
        })
}

//Generador, registrara la cantidad de elementos de acuerdo a las paginas
function *crearPaginador(total){
    for (let i = 1; i <= total; i++) {
        yield i;
    }
}

function calcularPaginas(total){
    return parseInt(Math.ceil( total / registrosPorPagina ));
}

function mostrarImagenes(imagenes){

    limpiarHTML(resultado);

    //itera imgs y construye el html
    imagenes.forEach(imagen => {
        const { previewURL, likes, views, largeImageURL } = imagen;
        // console.log(imagen);

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

    //limpiar el paginador previo
    limpiarHTML(paginacionDiv);

    //nuevo html
    imprimirPaginador();


}

function imprimirPaginador(){
    iterador = crearPaginador(totalPaginas);

    while(true){
        const { value, done } = iterador.next();
        if(done) return;

        //caso contrario
        const boton = document.createElement('a');
        boton.href = '#';
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'font-bold', 'mb-4', 'uppercase', 'rounded');

        paginacionDiv.appendChild(boton);

    }
}

function limpiarHTML(elemento){
    //borra html previo
    while(elemento.firstChild){
        elemento.removeChild(elemento.firstChild);
    }
}
