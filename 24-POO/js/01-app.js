//class declaration
//declarar
class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

}

//instanciar
const yeya = new Cliente('yeya', 100000);
console.log(yeya);


//class expresion esta nadie la usa ajajajaja
const ClienteDos = class {
    //lo mismo que en la otra sintaxis
}
const yeyaDos = new ClienteDos();
