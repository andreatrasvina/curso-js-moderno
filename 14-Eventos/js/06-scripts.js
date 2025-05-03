//EVENT BUBBLING, LOS EVENTOS SE PROPAGAN COMO BURBUJAS
//COMO DETENERLO CON STOP PROPAGATION

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv = addEventListener('click', e => {
    e.stopPropagation(); //detiene la propagacion del evento, evitando sucesos inesperados
    console.log('Diste click al card');
})

infoDiv = addEventListener('click', e => {
    e.stopPropagation();
    console.log('Diste click al info');
})

titulo = addEventListener('click', e => {
    e.stopPropagation();
    console.log('Diste click al titulo');
})