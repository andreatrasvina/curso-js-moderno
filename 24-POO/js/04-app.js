class Cliente {

    #nombre //esto lo convierte en una propiedad privada, 
            //no se puede acceder a ella mediante el objeto, solo por metodos dentro de la clase
            //o getters y setters

    constructor(nombre, saldo){
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.#nombre}, tu saldo es de $${this.saldo}`;
    }

    static bienvenida(){
        return 'Bienvenida al cajero';
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }

}

const yeya = new Cliente('yeya', 100000);
// console.log(yeya); //error
console.log(yeya.mostrarInformacion() );

console.log(yeya.getNombre());