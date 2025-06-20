// GENERADORES
// un generador es una funcion que retorna un iterador
// se crea al poner un * antes del nombre de la funcion

//iterador en objetos estaticos
function *crearGenerador(){
    //crea los valores internos
    yield 3;
    yield 'Andrea Lucero';
    yield 3+3;
    yield false;

}

const iterador = crearGenerador();

//se puede acceder a sus funciones del proto
console.log(iterador);
// //next hace que pase al siguiente elemento
console.log(iterador.next().value);
console.log(iterador.next());
console.log(iterador.next().value);
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador);

//iterador en objetos programables
//generador para carrito de compras
function *generadorCarrito(carrito){

    for(let i = 0; i < carrito.length; i++){
        yield carrito[i]; //toma el valor del carrito
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

const itera = generadorCarrito(carrito);

//itera
console.log(itera.next());
console.log(itera.next());
console.log(itera.next());

