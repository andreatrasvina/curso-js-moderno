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




