// de callback hell a promises

frutas = [];

const nuevaFruta = fruta => new Promise(resolve => {
    setTimeout(() => {
        frutas.push(fruta);
        resolve(`agregado: ${fruta}`)
    }, 3000);
} )

nuevaFruta('fresa')
    .then( resultado => { //el resultado es el resolve
        console.log(resultado); 
        console.log(frutas);
        return nuevaFruta('mango');

    })
    .then( resultado => {
        console.log(resultado); 
        console.log(frutas);
        return nuevaFruta('mandarina');

    }).then( resultado => {
        console.log(resultado); 
        console.log(frutas);
    })