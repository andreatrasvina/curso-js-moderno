iniciarApp();

function iniciarApp() {
    console.log('iniciando app...');

    segundaFuncion();

}

function segundaFuncion() {
    console.log('desde la segunda funcion');

    usuarioAutenticado('andrea');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario... espere...');
    console.log('Usuario autenticado existosamente: ' + usuario);
}