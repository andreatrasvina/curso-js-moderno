const diaHoy = new Date();
const otra = new Date('9-7-2003');
const otraForma = new Date('September 7 2003');

let valor;

valor = diaHoy;

//getters
valor = diaHoy.getFullYear();
valor = diaHoy.getMonth();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime();

//tambien hay setters
valor = diaHoy.setFullYear(2010);

console.log(diaHoy);