// WEAK SETS

// en los Set se pueden agregar cualquier tipo de valor y datos
// en los WeakSet solo se pueden agregar objetos
// NO SON INTERABLES
// NO SE PUEDE CONOCER SU LONGITUD, NO TIENE METODO SIZE

const weakSet = new WeakSet();

const cliente = {
    nombre: "Andrea",
    saldo: 10000
}

weakSet.add(cliente);
//weakSet.add(50); no se puede agregar algo que sea diferente de un objeto

console.log(weakSet);
console.log(weakSet.has(cliente));

weakSet.delete(cliente);
console.log(weakSet);