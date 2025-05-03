//agregar parametros a los arrow functions

const aprendiendo = function(tecnologia, tecnologia2) {
    console.log('aprendiendo '+tecnologia+' y '+tecnologia2);
}

aprendiendo('javascript', 'node.js');

//CUANDO EL ARROW FUNCTION TIENE SOLO UN PARAMETRO SE PUEDEN QUITAR LOS PARENTESIS
const aprendiendo2 = tecnologia => console.log('aprendiendo '+tecnologia);

aprendiendo2('javascript');
