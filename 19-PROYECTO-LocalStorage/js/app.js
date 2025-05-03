//varaibles
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


//event listeners
eventListeners();

function eventListeners(){
    //cuando el ususario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    //cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        crearHTML();
    });
}

//funciones
function agregarTweet(e){
    e.preventDefault();

    //text area donde el usuario escribe, se obtiene el texto
    const tweet = document.querySelector('#tweet').value;

    //validacion si esta vacio el contenido del textarea
    if(tweet===''){
        mostrarError('El tweet no puede ir vacio');

        return; //se evita que se ejecuten mas lineas de codigo
    }

    const tweetOBJ = {
        id: Date.now(),
        tweet: tweet,
    }
    //añadir al arreglo los tuits
    tweets = [...tweets, tweetOBJ];
    console.log(tweets);

    //crear el html
    crearHTML();

    //reiniciar el texto del textarea
    formulario.reset();

}

//mostrar mensaje de error
function mostrarError(error) {

    //verifica si ya hay una alerta y la elimina si ya hay
    const existeError = document.querySelector('.error');
    if (existeError) return;

    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //inyecta el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //elimina la alerta despues de 3 sgundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);

}

//muestra el listado de los tweets
function crearHTML(){

    limpiarHTML();
    
    if(tweets.length > 0){
        tweets.forEach( tweet => {

            //agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            //añadir funcion de eliminar del boton, se pone como funcion porque pasaremos parametros
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }
            
            //crear el elementos html
            const li = document.createElement('LI');
            
            //añadir el texto
            li.innerText = tweet.tweet;
            
            //inyectar el boton
            li.appendChild(btnEliminar);

            //insertarlo en el html
            listaTweets.appendChild(li);

        });
    }

    sincronizarStorage();

}

//agregar los tweets al local storage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));

}


//limpiar el HTML
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
    
}


//borrar tweet con el boton
//al usar .filter te crea un nuevo arreglo y no modifica el actual, por eso se debe actualizar despues el actual con los nuevos resultados
function borrarTweet(id){
    tweets = tweets.filter(tweet => tweet.id !== id);

    crearHTML();
}