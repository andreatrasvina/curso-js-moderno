function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const andrea = new Cliente ('andrea', 1000);
console.log(andrea);

function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de: $${saldo}`;
}

console.log(formatearCliente(andrea));

function Empresa(nombre, saldo, tipo){
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipo = tipo;
}

//el problema es cuando se debe hacer una funcion para cada obj cuando con prototype se pueden heredar los metodos
const roblox = new Empresa ('roblox', 10000000, 'videojuegos');
console.log(formatearCliente(roblox));