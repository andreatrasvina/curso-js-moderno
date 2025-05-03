//ROMPER LA EJECUCION DE UN FOR LOOP
for( let i=0; i <= 10; i ++){
    if(i===5){
        console.log('Me detengo en el numero '+i);
        break;
    }
    console.log('soy el numero: '+i);
}

//EJECUTA TODO DESDE EL INICIO DESDE UN PUNTO ESPECIFICO
for( let i=0; i <= 10; i ++){
    if(i===5){
        console.log('Soy el numero cinco');
        continue; //corta la ejecucion en este punto y se regresa al inicio de la instruccion
    }
    console.log('soy el numero: '+i); //ya no llega a esta parte
}

//COMO INDICAR QUE UNO DE LOS ELEMENTOS TIENE DESCUENTO
const carrito = [
    {nombre: 'Monitor de 3 pulgadas', precio: 200},
    {nombre: 'Mouse gamer logitech', precio: 690},
    {nombre: 'Teclado ocelotgamer', precio: 150},
    {nombre: 'Audifonos blancos', precio: 800, descuento: true},
    {nombre: 'PC GAMER', precio: 200000},
    {nombre: 'Silla ergonomica', precio: 5000},
    {nombre: 'Escritorio de madera blanco', precio: 3000},
]

for(let i=0; i<carrito.length; i++){

    if(carrito[i].descuento){
        console.log('El articulo '+carrito[i].nombre+' tiene descuento');
        continue;
    }
    console.log(carrito[i].nombre);
}