//simplificarlo en arrow functions

const reproductor = {
    cancion: '',
    reproducir: id => console.log('Reproduciendo cancion '+id),
    pausa: () => console.log('pausando...'),
    borrar: id => console.log('Borrando cancion '+ id),
    crearPlaylist: nombre => console.log('Creando playlist con el nombre: '+nombre),
    reproducirPlaylist: nombre => console.log('Reproduciendo playlist: '+nombre),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log('añadiendo '+cancion);
    },

    get obtenerCancion(){
        console.log(this.cancion);
    }
}

reproductor.nuevaCancion = 'Espongadas';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.pausa();
reproductor.borrar(30);
reproductor.crearPlaylist('Espongasion');
reproductor.reproducirPlaylist('Espongasion');