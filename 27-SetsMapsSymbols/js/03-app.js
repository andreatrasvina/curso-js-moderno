// MAPS
// listas ordenadas en llave y valor, se asemeja a un objeto pero con una sola propiedad
// cualquier tipo de dato
// mejor performance que un objeto

const cliente = new Map();

cliente.set('nombre', 'Andrea');
cliente.set('tipo', 'premium');
cliente.set('saldo', 100000);

console.log(cliente);
console.log(cliente.has('nombre'));//llave
console.log(cliente.get('nombre'));//valor
console.log(cliente.size);

cliente.clear();


const paciente = new Map( [ ['nombre', 'paciente'], ['cuarto', 'no asignado'] ] );

paciente.set('dr', 'simialares');
paciente.set('nombre', 'elpepe'); //al usar la misma llave reescribe el valor

console.log(paciente);

//tambien se puede iterar como set
paciente.forEach(datos => {
    console.log(datos);
});