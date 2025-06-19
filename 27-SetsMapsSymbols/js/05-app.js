// SYMBOLS
// permite crear propiedades unicas, cada symbol es diferente o unique
// no son iterables

const sym1 = Symbol();
const sym2 = Symbol();

if(sym1 === sym2){
    console.log('son iguales');
}else{
    console.log('son diferentes'); //aunque sean iguales o el valor sea igual, SIEMPRE seran diferentes
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {}

//agregar nombre y apellido como llave del objeto
persona[nombre] = 'Andrea';
persona[apellido] = 'Lucero';
persona.tipoCliente = 'premium';
persona.saldo = 1000000;

console.log(persona);
console.log(persona[nombre]); //para poder acceder a la llave del symbol se usan corchetes

//no son interables
for(let i in persona){
    console.log(i);
}


//definir una descripcion del symbol
const nombreCliente = Symbol('Este es el nombre del cliente');
const cliente = {}

cliente[nombreCliente] = 'Andrea';

console.log(cliente); //cabecera del symbol y valor 
console.log(cliente[nombreCliente]); //valor
console.log(nombreCliente); //cabecera del symbol
