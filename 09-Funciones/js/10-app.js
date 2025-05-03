//arrow functions

//function expresion
const aprendiendo = function() {
    console.log('aprendiendo javascript');
}

//para convertirla a un arrow function

// 1. se elimina la palabra function
// 2. se mantiene el parentesis
// 3. se agrega una flecha despues del parentesis

const aprendiendo2 = () => {
    console.log('aprendiendo javascript');
}

aprendiendo2();

//cuando la funcion es de una sola linea de codigo se borran las llaves {}
const aprendiendo3 = () => console.log('aprendiendo javascript');

aprendiendo3();
