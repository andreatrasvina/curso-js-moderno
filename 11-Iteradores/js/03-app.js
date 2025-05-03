//FIZZ BUZZ - 100 numeros

// 3,6,9,12... fizz
// 5,10,15,20... buzz
// 15,30,45 fizzbuzz

for(let i=1; i<=100; i++){
    if(i%3===0 && i%5===0){
        console.log(i+' FIZZBUZZ');
    }else if(i%3===0){
         console.log(i+' fizz');
    } else if(i%5===0){
        console.log(i+' buzz');
    }
}