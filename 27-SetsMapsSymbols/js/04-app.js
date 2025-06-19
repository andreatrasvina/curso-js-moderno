// WEAKMAP
// llave - valor
// no se pueden iteraar ni conocer la extension de un weakmap mediante el .size
// solo guarda objetos

const producto = {
    idProducto: 1
}

const weakMap = new WeakMap();

weakMap.set(producto, 'Monitor');

console.log(weakMap.has(producto));
console.log(weakMap.get(producto)); //no se muestran las propiedades dentro del obj, son ocultas(masomenos)
console.log(weakMap.delete(producto));
console.log(weakMap);
