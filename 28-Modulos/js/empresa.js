import { Cliente } from "./cliente.js";

export class Empresa extends Cliente{
    constructor(nombre, ahorro, categoria){
        super(nombre, ahorro);
        this.categoria = categoria;
    }

    mostrarInformacion(){
        return `Empresa: ${this.nombre}, su ahorro es de ${this.ahorro} - categoria: ${this.categoria}`
    }
}