const producto = 'Monitor 3 pulgadas';

//repetir una cadena de texto
const texto = ' en promocion'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

//split, dividir un string cuando encuentre el caracter indicado
const actividad = 'Estoy aprendiendo javascript moderno';
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a caminar';
console.log(hobbies.split(", "));

//ejemplo basico clasificar los hashtags
const tweet = 'Aprendiendo JavaScript #JSModernoConJuan';
console.log(actividad.split("#"));