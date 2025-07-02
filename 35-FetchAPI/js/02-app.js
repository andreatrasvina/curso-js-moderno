//fetch api json objeto
const cargarJsonBtn = document.querySelector('#cargarJSON');
cargarJsonBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    
    const url = 'data/empleado.json';

    fetch(url)
        .then( response => {
            //console.log(response);

            return response.json();
        })
        .then( resultado => {
            mostrarHTML(resultado);
        })
}

function mostrarHTML( {id, nombre, empresa, trabajo} ){

    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
        <p>Empleado: ${nombre}</p>
        <p>id: ${id}</p>
        <p>empresa: ${empresa}</p>
        <p>trabajo: ${trabajo}</p>
    `;
}