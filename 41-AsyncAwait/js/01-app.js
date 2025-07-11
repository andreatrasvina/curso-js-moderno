//try catch: nunca se detiene la ejecucion y funcionamiento del codigo aunque haya errores
console.log(2+2);

try {
    autenticarUsuario();
} catch (error) { //administrar el error
    console.log(error);
}

console.log('El Pepe');