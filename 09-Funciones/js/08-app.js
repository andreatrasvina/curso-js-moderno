function sumar(a, b){
    return a + b;
}

const resultado = sumar(1, 4);

console.log(resultado);

//EJEMPLO MAS AVANZADO
let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(300);
total = agregarCarrito(300);

const totalPagar = calcularImpuesto(total);
console.log(totalPagar);
console.log(total);