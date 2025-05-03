const autenticado = true;

//SI SE ESTA EVALUANDO UN TRUE, no es necesario verificar el true: if(autenticado===true)
if(autenticado){
    console.log('El usuario esta autenticado');
}

const puntaje = 300;

function revisarPuntaje(){
    if(puntaje>400){
        console.log('Excelente')
        return; //el return solo funciona dentro de funciones, al llegar a ese punto
                //el resto del codigo ya no se ejecuta
    }

    if(puntaje>200){
        console.log('Muy bien')
        return; //el return solo funciona dentro de funciones, al llegar a ese punto
                //el resto del codigo ya no se ejecuta
    }
}

revisarPuntaje();