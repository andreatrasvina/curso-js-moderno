import { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

console.log(nombreCliente);
console.log(ahorro);

console.log(mostrarInformacion(nombreCliente, ahorro));

tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente.mostrarInformacion());

//empresa
const empresa = new Empresa('level up access', 200000, 'E commerce');
console.log(empresa.mostrarInformacion());