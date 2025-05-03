//EVENTOS QUE SUCEDEN CON EL SCROLL DEL MOUSE

window.addEventListener('scroll', () => {
    console.log('estas scrolleando');

    const scrollPx = window.screenY; //indica en que parte de los px estas scrolleando
    console.log(scrollPx);

    //PARA REALIZAR UNA ANIMACION DEPENDIENDO DE QUE PARTE DE LA PAGINA TE ENCUENTRES
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    console.log(ubicacion);

    if(ubicacion.top < 720){
        console.log('El elemento ya es visible');
    }else{
        console.log('aun no es visible');
    }
});