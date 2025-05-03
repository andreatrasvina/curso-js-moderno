//cada objeto tiene una especie de "plantilla oculta" llamada prototype

//OBJECT LITERAL
const cliente = {
    nombre: 'andrea',
    saldo: 200000
}

console.log(cliente);

//OBJECT CONSTRUCTOR

//los metodos o prototypes relacionados a Cliente se pueden heredar a sus objetos
//codigo reutilizable
//creamos un constructor de Cliente
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

//creamos el objeto cliente1 de new Cliente
const cliente1 = new Cliente ('andrea', 1000);
console.log(cliente1)

//ejemplo
//usamos prototype para agregarle un metodo
Cliente.prototype.saldoDisponible = function () {
    console.log('hola tengo $' + this.saldo);
};

//aunque el metodo saldoDisponible no está directamente en cliente1, lo hereda del prototype de Cliente
console.log(cliente1.saldoDisponible());