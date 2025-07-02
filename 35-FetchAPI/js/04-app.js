//cargar api

const cargarAPI = document.querySelector('#cargarAPI');
cargarAPI.addEventListener('click', obtenerDatos);

function obtenerDatos(){

    const url = 'https://picsum.photos/list';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHTML(resultado))
}

function mostrarHTML(datos){

    const contenido = document.querySelector('.contenido');

    let html = '';

    datos.forEach(perfil => {
        const {author, post_url} = perfil;

        html += `
            <p>Autor: ${author}</p>
            <a href="${post_url}">Ver imagen: </a>
        `;
    });

    contenido.innerHTML = html;
}