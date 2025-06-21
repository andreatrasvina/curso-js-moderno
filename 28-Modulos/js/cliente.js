//funcion iife, solo se puede acceder aqui mismo
// (function() {
//     console.log('Desde un IIFE'); 

//     //a menos de que lo envies por la ventana global, pero seria innecesario llenar la ventana
//     //window.nombreCliente = 'Andrea';
// })();

//lo mejor es usar modulos

export const nombreCliente = 'Andrea';
export const ahorro = 2000;

export function mostrarInformacion(cliente, ahorro){
    return `Cliente: ${cliente}, su ahorro es de ${ahorro}`
}

export function tieneSaldo(ahorro) {
    if(ahorro > 0){
        console.log('si tiene saldo');
    }else{
        console.log('no tiene saldo');
    }
}

export class Cliente {
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, su ahorro es de ${this.ahorro}`
    }
}