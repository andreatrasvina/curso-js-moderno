//operador mayo que, menor que

const dinero = 500;
const totalPagar = 300;
const tarjeta = false;

if( dinero >= totalPagar){
    console.log('si podemos pagar');
}else if(tarjeta){
    console.log('si tengo la tarjeta');
}else{
    console.log('fondos insuficientes');
}