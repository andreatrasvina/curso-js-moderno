//class declaration
//declarar
class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    //metodo
    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de $${this.saldo}`;
    }

    //metodos estaticos
    //no tienen acceso a instancias (this, obj, etc)
    static bienvenida(){
        return 'Bienvenida al cajero';
    }

}

//instanciar
const yeya = new Cliente('yeya', 100000);
console.log(yeya.mostrarInformacion());
console.log(yeya);

//es una propiedad de la clase pero no de sus instancias o objetos
console.log( Cliente.bienvenida() );


//class expresion esta nadie la usa ajajajaja
const ClienteDos = class {
    //lo mismo que en la otra sintaxis
}
const yeyaDos = new ClienteDos();
