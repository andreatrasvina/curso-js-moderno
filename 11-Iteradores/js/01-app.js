for( let i=0; i <= 10; i ++){
    console.log('soy el numero: '+i);
}

//numeros pares e impares
for(let i=0; i <= 20; i++){
    if(i%2===0){
        console.log('El numero '+i+' es PAR');
    }else{
        console.log('El numero '+i+' es IMPAR');
    }
}

//RECORRER UN ARRAY DE LONGITUD INDEFINIDA
const carrito = [
    {nombre: 'Monitor de 3 pulgadas', precio: 200},
    {nombre: 'Mouse gamer logitech', precio: 690},
    {nombre: 'Teclado ocelotgamer', precio: 150},
    {nombre: 'Audifonos blancos', precio: 800},
    {nombre: 'PC GAMER', precio: 200000},
    {nombre: 'Silla ergonomica', precio: 5000},
    {nombre: 'Escritorio de madera blanco', precio: 3000},
]

for(let i=0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}