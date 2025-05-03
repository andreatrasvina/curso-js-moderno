const autenticado = true;

//se recomienda poner el if asi solo y no de esta manera: if(autenticado == true)
if(autenticado){
    console.log("Puedes ver netflix");
} else {
    console.log("No puedes ver netflix");
}

//OPERADOR TERNARIO
console.log( autenticado ? 'Si esta autenticado' : 'No esta autenticado');