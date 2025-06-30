// Una función de callback es una función que se pasa a otra función como un argumento, 
// que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

const mascotas = ['daysi', 'palomo', 'yeyo', 'hazael'];

function agregarMascota(mascota, callback){
    setTimeout(() => {
        mascotas.push(mascota);
        callback();
    }, 2000);
}

function mostrarMascotas(){
    setTimeout(() => {
        mascotas.forEach(mascota => {
            console.log(mascota);
        });
    }, 1000);
}

mostrarMascotas();

//llamar de vuelta la funcion
agregarMascota('nico', mostrarMascotas/*callback*/);

//usarlos demasiado o usarlos mal causa el callback hell