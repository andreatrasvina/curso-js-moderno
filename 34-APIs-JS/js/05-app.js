// detectar cuando estamos viendo o no la pagina actual
// visibility state

//habilita el evento si la visibilidad de la pagina cambia
document.addEventListener('visibilitychange', () => {
    //console.log(document.visibilityState);

    if(document.visibilityState === 'visible'){
        console.log('Ejecutando funcion para reproducir el video/audio...');
    }else{
        console.log('Pausa en el video/audio...');
    }
})