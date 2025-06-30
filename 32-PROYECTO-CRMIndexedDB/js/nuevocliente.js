(function() {
    let DB;
    
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();

        formulario.addEventListener('submit', validarCliente);
    })

    function conectarDB(){
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function() {
            console.log('hubo un error al conectarse a la bd');
        }


        abrirConexion.onsuccess = function(){
            DB = abrirConexion.result;
            console.log('llegue aqio')
        }
    }

    function validarCliente(e){
        e.preventDefault();

        //leer todos los inputs
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;
    

        if(nombre === '' || email === '' || telefono === '' || empresa === ''){
            imprimirAlerta('Todos los argumentos son necesarios', 'error');

            return;
        }

        //crear un objeto con la informacion
        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        cliente.id = Date.now();

        crearNuevoCliente(cliente);
        console.log(cliente);
    }
    
    //bd
    function crearNuevoCliente(cliente){
        const transaction = DB.transaction(['crm'], 'readwrite');

        const objectStore = transaction.objectStore('crm');

        objectStore.add(cliente);

        transaction.onerror = function(){
            console.log('hubo un error en la bd');
        }

        transaction.onsuccess = function(){
            console.log('creado correctamente');

            imprimirAlerta('El usuario se agrego');

        }
    }

    function imprimirAlerta(mensaje, tipo){

        const alerta = document.querySelector('.alerta');

        if(!alerta){

            const divMensaje = document.createElement('DIV');
            divMensaje.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'border', 'alerta');
    
            if(tipo === 'error'){
                divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
            }else{
                divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
            }
    
            divMensaje.textContent = mensaje;
    
            formulario.appendChild(divMensaje);
    
            setTimeout(() => {
                divMensaje.remove();
            }, 3000);
        }
    }
})();