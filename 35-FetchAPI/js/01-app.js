// la api nativa mas usada: fetch
// enviar o recibir datos

const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){

    const url = 'data/datos.txt';
    fetch(url)
        .then( respuesta => {
            console.log(respuesta);

            //convierte el cuerpo en texto plano o json()
            return respuesta.text(); // devuelve una promise
        })
        //entonces datos contiene ese texto y lo muestra en consola
        .then( datos => {
            console.log(datos);
        })
        .catch( error => {
            console.log(error);
        })
}