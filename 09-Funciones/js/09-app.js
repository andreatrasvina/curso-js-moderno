//añadir funciones en un objeto

const reproductor = {
    reproducir: function(id) {
        console.log('Reproduciendo cancion '+id);
    },
    pausa: function(){
        console.log('pausando...');
    },
    borrar: function(id){
        console.log('Borrando cancion '+ id)
    },
    crearPlaylist: function(nombre){
        console.log('Creando playlist con el nombre: '+nombre)
    },
    reproducirPlaylist: function(nombre){
        console.log('Reproduciendo playlist: '+nombre);
    }
}

reproductor.reproducir(30);
reproductor.pausa();
reproductor.borrar(30);
reproductor.crearPlaylist('Espongasion');
reproductor.reproducirPlaylist('Espongasion');