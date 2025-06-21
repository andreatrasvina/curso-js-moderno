import alias, { nombreCliente as nombre, ahorro, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

console.log(nombre);
console.log(ahorro);

console.log(mostrarInformacion(nombre, ahorro));

tieneSaldo(ahorro);

const cliente = new Cliente(nombre, ahorro);
console.log(cliente.mostrarInformacion());

//empresa
const empresa = new Empresa('level up access', 200000, 'E commerce');
console.log(empresa.mostrarInformacion());

//export default, no importa el nombre con el que lo importes, toma un alias por eso debe de ser el unico
//nuevaFuncion();
alias();