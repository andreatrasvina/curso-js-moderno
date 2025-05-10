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
console.log(Cliente.bienvenida());


//herencia
class Empresa extends Cliente {
    constructor (nombre, saldo, telefono, categoria){
        super(nombre, saldo); //no se referencia del objeto, se referencia de la clase Padre de la que extiende
        this.telefono = telefono;
        this.categoria = categoria;
    }

    //si hay metodos o funciones con el mismo nombre se reescribiran
    static bienvenida(){
        return 'Bienvenida al cajero de empresass';
    }

}

const empresa = new Empresa('el pepe dev', 90000000);
console.log(empresa);
console.log(Empresa.bienvenida());
console.log(empresa.mostrarInformacion());

