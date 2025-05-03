//while loop

let i = 1; //inicializar la variable

while(i <= 10){ //condicion
    console.log('numero '+i);

    i++; //incremento
}

//FIZZ BUZZ EN WHILE
while(i <= 100){
    if(i%3===0 && i%5===0){
        console.log(i+' FIZZBUZZ');
    }else if(i%3===0){
         console.log(i+' fizz');
    } else if(i%5===0){
        console.log(i+' buzz');
    }

    i++;
}

//PARES Y NONES CON WHILE
let j = 1;

while(j < 20){

    if(j%2===0){
        console.log(j+' es par');
    }else{
        console.log(j+' es impar');
    }

    j++;
}