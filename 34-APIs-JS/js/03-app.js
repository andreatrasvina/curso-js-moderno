// detectar si hay conexion a internet 
window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado(){
    if(navigator.onLine){
        console.log('ya tienes conexion a internet')
    }else{
        console.log('no tienes conexion a internet, intenta mas tarde');
    }
}