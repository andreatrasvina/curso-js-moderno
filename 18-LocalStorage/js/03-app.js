//eliminar elementos de local storage
localStorage.removeItem('nombre');

//actualizar un registro
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('nuevo mes');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));

//limpiar todos los cambios
localStorage.clear();
