function descargarUsuarios() {

    return new Promise(( resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if(!error){
                resolve('El listado de usuarios se ha descargado correctamente!')
            }else{
                reject('Error en la conexion');
            }
        }, 3000);
    })
}

//asyn await, function declaration
async function ejecutar(){
    try {
        console.log(1+1);
        const respuesta = await descargarUsuarios();//await detiene ejecucion hasta que resulve la promesa

        console.log(1+5);
        console.log(respuesta);
        
    } catch (e) {
        console.log(e);
    }
}

ejecutar();
