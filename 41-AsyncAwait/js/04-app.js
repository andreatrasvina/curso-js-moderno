//manejar multiples awaits

function descargarNuevosClientes(){

    return new Promise( resolve => {
        console.log('Descargando clientes...');

        setTimeout(() => {
            resolve('Clientes descargados');
        }, 5000);
    })
}

function descargarNuevosPedidos(){

    return new Promise( resolve => {
        console.log('Descargando pedidos...');

        setTimeout(() => {
            resolve('Pedidos descargados');
        }, 3000);
    })
}

const app = async () => {

    try {
        //si una funcion depende de la otra, pues si debe esperar a ejecutarse xdxd
        const clientes = await descargarNuevosClientes();
        console.log(clientes);

        const pedidos = await descargarNuevosPedidos();
        console.log(pedidos);

        //si una funcion no depende de la otra se pueden ejecutar al mismo tiempo para mejorar performance
        const resultado = await Promise.all( [descargarNuevosClientes(), descargarNuevosPedidos() ])
        console.log(resultado[0]);
        console.log(resultado[1]);
        
    } catch (e) {
        console.log(e);
    }
}

app();