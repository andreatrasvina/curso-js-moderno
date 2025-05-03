//OPERADOR TERNARIO

const autenticado = true;

console.log(autenticado ? 'Si se cumple' : 'No se cumple');

//para revisar dos condiciones en un ternario

const puedePagar = true;

console.log(autenticado && puedePagar ? 'Si se cumple' : 'No se cumple');

//ternario anidado
console.log(autenticado ? puedePagar ? 'Si esta autenticado y puede' : 'si esta autenticado, no puede pagar' : 'No se cumple');
