// promises
// El objeto Promise representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.
// una promesa es un objeto devuelto al cual se adjuntan funciones callback, 
// en lugar de pasar callbacks a una función.

const realizarSuma = new Promise ( (resolve, reject) => {

    const suma = true;

    if(suma){
        resolve('suma realizada');
    }else{
        reject('no se pudo realizar la suma');
    }
});

//para obtener el resultado
realizarSuma
    .then( resultado => {
        suma(resultado);
    })
    // o... then( resultado => console.log(resultado) );
    .catch(error => {
        console.log(error);
    })

function suma(mensaje){
    console.log(mensaje);
}

// hay 3 valores posibles...
// fulfilled - la promise se cumplio
// rejected - la promise no se cumplio
// pending - no se ha cumplido y tampoco se ha rechazado, pendiente