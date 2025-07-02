//fetch api json array

const cargarJson = document.querySelector('#cargarJSONArray');
cargarJson.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = 'data/empleados.json';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHTML(resultado))
}

function mostrarHTML(empleados){

    const contenido = document.querySelector('.contenido');

    let html = '';

    empleados.forEach(empleado => {
        const {id, nombre, empresa, trabajo} = empleado;

        html += `
            <p>Empleado: ${nombre}</p>
            <p>id: ${id}</p>
            <p>empresa: ${empresa}</p>
            <p>trabajo: ${trabajo}</p>
        `;
    });

    contenido.innerHTML = html;

}