//Declaracion de funcion (FUNCTION DECLARATION)
sumar();

function sumar(){
    console.log(2+2);
}
//FUNCIONA, PORQUE PRIMERO REGISTRA LAS FUNCIONES Y LUEGO LAS EJECUTA

//Expresion de funcion (FUNCTION EXPRESSION)
sumar2();

const sumar2 = function() {
    console.log(3+3);
}
//NO FUNCIONA AL NO TENER LA ESTRUCTURA DE FUNCION TRADICIONAL

