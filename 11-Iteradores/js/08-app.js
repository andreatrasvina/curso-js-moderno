// FOR IN ITERA SOBRE UN OBJETO
// Accede al indice en arreglos tradicionales

const pendientes = ['tarea', 'comer', 'proyecto', 'daysi', 'yeyo'];

for(let pendiente in pendientes){
    console.log(pendiente); //0,1,2,3,4
}

const automovil = {
    //llave, valor
    modelo: 'porsche',
    year: 1969,
    motor: '8.0',
}

for(let propiedad in automovil){
    console.log(propiedad); // muestra el nombre de la propiedad

    console.log(automovil[propiedad]); //muestra el valor que contiene la propiedad
}

//Una sintaxis mas facil que la de arriba
for(let [llave, valor] of Object.entries(automovil) ){
    console.log(valor);
}