
//aunque es const si se pueden cambiar los valores 
const meses = ['enero','febrero','marzo','abril','mayo','junio','julio'];

//reasignar nuevos valores
meses[0]= 'nuevo mes';

meses[10] = 'ultimo mes';

console.table(meses);