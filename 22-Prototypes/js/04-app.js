function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

//seleccionar el proto y agregarle la nueva funcion

//NO SE PUEDE USAR ARROW FUNCTION
//function() solo busca en el objeto actual
//arrow function busca en la ventana global y no es el punto del proto
Cliente.prototype.nuevaFuncion = function () {
    console.log('Desde mi nuevo proto!!!');
}


//instanciarme
const andrea = new Cliente ('andrea', 1000);
andrea.nuevaFuncion();
console.log(andrea);


Cliente.prototype.tipoCliente = function () {
    let tipo;

    if(this.saldo > 100000) {
        tipo = 'Tiene feria'
    } else if(this.saldo > 5000){
        tipo = 'normal'
    } else {
        tipo = 'pobre'
    }

    return tipo;
}

//referencia de un prototype dentro de otro prototype
Cliente.prototype.infoCliente = function () {
    return `Nombre: ${this.nombre}, Saldo: $${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

//ejemplo de un banco
Cliente.prototype.retiraSaldo = function(retirar){
    this.saldo -= retirar;
}

console.log(andrea.tipoCliente());
console.log(andrea.infoCliente());

andrea.retiraSaldo(10);

console.log(andrea.infoCliente());

//para heredar el constructor se reemplazan las variables repetidas y se hace un call
// X this.nombre = nombre;
// X this.saldo = saldo;
function Persona (nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

//para heredar los metodos se deben pasar los mtdos de funcion a funcion
//antes de las instancias
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

//instanciarlo
const andrea2 = new Persona('andrea', 200000, 1234567890);
console.log(andrea2);
console.log(andrea2.infoCliente());

Persona.prototype.infoNumero = function () {
    return `el telefono de este naco es: ${this.telefono}`;
}

console.log(andrea2.infoNumero());