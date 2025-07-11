const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos2);

//fetch con promises
function obtenerDatos(){
    fetch(url)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(e => console.log('algo salio mal papu', e))
}

//fetch con async await
async function obtenerDatos2(){

    try {
       const response = await fetch(url); //este await bloque la siguiente linea,
        const result = await response.json(); //hasta que exista respuesta se manda como json

        console.log(result); 
    } catch (e) {
        console.log(e);
    }
    
}