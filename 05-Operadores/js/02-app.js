const num1 = 20;
const num2 = "20";
const num3 = 30;

// REVISAR SI DOS NUMEROS SON IGUALES
console.log(num1 == num3);

console.log(num1 == num2); 

//COMPARADOR ESTRCITO, no solo revisa el valor, tambien el tipo de dato 
console.log(num1 === num2);

console.log(num1 === parseInt(num2));

//DIFERENTE A
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2); 