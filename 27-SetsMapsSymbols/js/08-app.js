const ciudades = ['Londres', 'Italia', 'Mexico', 'Suiza'];

const ordenes = new Set([123, 321, 131, 102]);

const datos = new Map();
datos.set('nombre', 'Andrea');
datos.set('profesion', 'desarrollador de software');

//iterador entries, imprime llave - valor
for (let entry of ciudades.entries()){
    console.log(entry);
}

for (let entry of ordenes.entries()){
    console.log(entry);
}

for (let entry of datos.entries()){
    console.log(entry);
}

//values iterator, imprime solo el valor
for(value of ciudades.values()){
    console.log(value);
}

for(value of ordenes.values()){
    console.log(value);
}

for(value of datos.values()){
    console.log(value);
}

//keys iterator, solo imprime la llave
for(key of ciudades.keys()){
    console.log(key);
}

for(key of ordenes.keys()){
    console.log(key);
}

for(key of datos.keys()){
    console.log(key);
}

//iterador por default de cada tipo de dato
for(ciudad of ciudades){
    console.log(ciudad);
}

for(orden of ordenes){
    console.log(orden);
}

for(dato of datos){
    console.log(dato);
}

