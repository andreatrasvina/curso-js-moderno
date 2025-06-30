//api nativa para envio de notificaciones en el navegador

const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission() //permiso para enviar notificaciones
        .then( resultado => {
            console.log(resultado);
        });
})

const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', () => {

    //no se pueden enviar notificaciones sin el permiso del usuario
    if(Notification.permission === 'granted'){
        const notificacion = new Notification('Esta es la notificacion', {
            icon: 'img/image.png',
            body: 'BBVA, introduce tu ccv y numero de tarjeta'
        });

        notificacion.onclick = function(){
            window.open('https://www.bbva.mx/')
        }
    }
})