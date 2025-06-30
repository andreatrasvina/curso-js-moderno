// callback hell
// ocurre cuando se anidan múltiples funciones de callback dentro de otras, 
// creando una estructura de código compleja y difícil de leer y mantener

frutas = [];

function nuevaFruta(fruta, callback){
    frutas.push(fruta);
    console.log(`agregado: ${fruta}`);
    callback();
}

function mostrarFutas(){
    console.log(frutas);
}

function iniciarCallbackHell(){
    setTimeout(() => {
        nuevaFruta('durazno', mostrarFutas);
        setTimeout(() => {
            nuevaFruta('fresa', mostrarFutas);
            setTimeout(() => {
                nuevaFruta('mango', mostrarFutas);
            }, 3000);
        }, 3000);
    }, 3000);
}

iniciarCallbackHell();

//para evitar esto las promises nos dan una sintexis mas clara