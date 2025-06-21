// INDEXED DB

// api en js para almacenar grandes cantidades de datos estructurados
// a diferencia de localstorage puede almacenar string, booleans, incluso archivos, cualqioer tipo de dato
// no tiene limites, pero archivos mas de 50mb pregunta al usuario por permisos
// soportado en todos los navegadores
// auqnue es una base de datos completa, sus datos siguen siendo visibles en el navegador


document.addEventListener('DOMContentLoaded', () => {
    crmDB();
});

function crmDB(){
    //crear base de datos version 1.0
    //                          nombre, version
    let crmDB = window.indexedDB.open('crm', 1);

    //si hay error
    crmDB.onerror = function () {
        console.log('Hubo un error al crear la base de datos');
    }

    //se se crea bien
    crmDB.onsuccess = function () {
        console.log('Base de datos creada');
    }

    //configuracion de la base de datos
    crmDB.onupgradeneeded = function(e){
        const ReferenciaDB = e.target.result;

        //el object store es lo que nos permite crear las columnas de la bd
        const objectStore = ReferenciaDB.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement : true
        });

        //definir las columnas
        objectStore.createIndex('nombre', 'nombre', { unique: false});
        objectStore.createIndex('email', 'email', { unique: true});
        objectStore.createIndex('telefono', 'telefono', { unique: false});

        console.log('columnas creadas');

    }
}