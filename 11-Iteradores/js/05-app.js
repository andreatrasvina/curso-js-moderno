//do while, se ejecuta al menos una vez sin importar si se cumple la condicion

let i = 0;

do {

    console.log('el numero es '+i);

    i++; //incremento
} while(i<10); //condicion

//FIZZ BUZZ CON DO WHILE
let j = 0;

do {

    if(j%3===0 && j%5===0){
        console.log(j+' FIZZBUZZ');
    }else if(j%3===0){
         console.log(j+' fizz');
    } else if(j%5===0){
        console.log(j+' buzz');
    }

    j++; //incremento
} while(j<100);