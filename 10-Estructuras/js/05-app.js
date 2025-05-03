// SWITCH CASE

const metodoPado = 'efectivo';

switch(metodoPado){
    case 'efectivo':
        pagar();
    break;

    case 'cheque':
        console.log('pagaste con cheque');
    break;

    case 'tarjeta':
        console.log('pagaste con tarjeta');
    break;

    default:
        console.log('No disponible');
    break;
}

function pagar(){
    console.log('pagando...')
}