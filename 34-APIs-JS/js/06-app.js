// speech recognition app
// convierte palabras habladas en texto

const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechRecognition);

function ejecutarSpeechRecognition(){
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    //inicia, pide permiso al usuario
    recognition.start();

    //comienza a grabar
    recognition.onstart = function(){
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando...';
    }

    //cuando termminamos de hablar
    recognition.onspeechend = function(){
        salida.textContent = 'Se dejo de grabar...';
        recognition.stop();
    }

    //lo grabado lo traslada a texto
    recognition.onresult = function(e){
        console.log(e.results[0][0]);

        const {confidence, transcript} = e.results[0][0];
        console.log(confidence, transcript);

        const speech = document.createElement('p');
        speech.innerHTML = `Grabado: ${transcript} con una certeza de: ${confidence}`;

        salida.appendChild(speech);
    }
}

// tambien existe la api de geolocalizacion:
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples