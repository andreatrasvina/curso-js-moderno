//EVITAR EL EVENT BUBBLING CON DELEGATION

const cardDiv = document.querySelector('.card');

//en delegacion se tiene un selector principal y con .target se busca segun la accion
cardDiv.addEventListener('click', e => {
    if(e.target.classList.contains('titulo')){
        console.log('Diste click en titulo');
    }

    if(e.target.classList.contains('precio')){
        console.log('Diste click en precio');
    }

    if(e.target.classList.contains('card')){
        console.log('Diste click en card');
    }
})