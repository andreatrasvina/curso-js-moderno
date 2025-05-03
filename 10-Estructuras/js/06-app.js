const usuario = true;
const puedePagar = false;

if(usuario && puedePagar){
    console.log('si puedes comprar');

} else if(!usuario) {
    console.log('inicia sesion');

} else if(!puedePagar) {
    console.log('ponte a chambear');

} else {
    console.log('no puedes comprar');
}