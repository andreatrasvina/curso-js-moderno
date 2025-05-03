const diaHoy = new Date();

moment.locale('es');

console.log(moment().format('MMMM DD YYYY hh:mm:ss'));

console.log(moment().format('LLLL'));

console.log(moment().add(3, 'days').calendar());