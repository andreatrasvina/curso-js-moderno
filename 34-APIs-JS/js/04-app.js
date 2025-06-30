//ejecutar pantalla completa con js 

const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const cerrarBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click', pantallaCompleta);
cerrarBtn.addEventListener('click', cerrarPantallaCompleta);

//accede a todo el contenido del html y solicita el full screen
function pantallaCompleta(){
    document.documentElement.requestFullscreen();
}

//sale del full screen
function cerrarPantallaCompleta(){
    document.exitFullscreen();
}