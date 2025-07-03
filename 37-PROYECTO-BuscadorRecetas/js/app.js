
document.addEventListener('DOMContentLoaded', iniciarApp);

function iniciarApp(){
    const selectCategorias = document.querySelector('#categorias');
    selectCategorias.addEventListener('change', seleccionarCategoria);

    const resultado = document.querySelector('#resultado');
    const modal = new bootstrap.Modal('#modal', {});

    obtenerCategorias();

    function obtenerCategorias(){
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        
        fetch(url)
            .then(consulta => consulta.json())
            .then(categorias => mostrarCategorias(categorias.categories))
    }

    function mostrarCategorias(categorias = []){
        console.log(categorias);

        categorias.forEach(categoria => {
            //console.log(categoria);
            const option = document.createElement('OPTION');
            option.value = categoria.strCategory;
            option.textContent = categoria.strCategory;
            //console.log(option)
            selectCategorias.appendChild(option);
        });
    }

    function seleccionarCategoria(e){
        const categoria = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`

        fetch(url)
            .then(consulta => consulta.json())
            .then(categoria => mostrarRecetas(categoria.meals));
    }

    function mostrarRecetas(categoriaRecetas = []){

        limpiarHtml(resultado);

        const heading = document.createElement('H2');
        heading.classList.add('text-center', 'text-black', 'my-5');
        heading.textContent = categoriaRecetas.length ? 'Resultados' : 'No Hay Resultados';
        resultado.appendChild(heading);
        
        categoriaRecetas.forEach(categoriaReceta => {
            //console.log(categoriaReceta)
            const { idMeal, strMeal, strMealThumb } = categoriaReceta;

            const recetaContenedor = document.createElement('DIV');
            recetaContenedor.classList.add('col-md-4');

            const recetaCard = document.createElement('DIV');
            recetaCard.classList.add('card', 'mb-4');
            
            const recetaImagen = document.createElement('IMG');
            recetaImagen.classList.add('card-img-top');
            recetaImagen.alt = `imagen de la receta: ${strMeal}`;
            recetaImagen.src = strMealThumb;

            const recetaCardBody = document.createElement('DIV');
            recetaCardBody.classList.add('card-body');

            const recetaHeading = document.createElement('H3');
            recetaHeading.classList.add('card-title', 'mb-3');
            recetaHeading.textContent = strMeal;

            const recetaButton = document.createElement('BUTTON');
            recetaButton.classList.add('btn', 'btn-danger', 'w-100');
            recetaButton.textContent = 'Ver Receta'; 
            // recetaButton.dataset.bsTarget = "#modal";
            // recetaButton.dataset.bsToggle = "modal";
            recetaButton.onclick = function() {
                seleccionarReceta(idMeal);
            }

            //inyectar en el html, se debe inyectar en el orden que quieres dar la estructura
            // .card
            //     img
            //     .card-body
            //         h3
            //         button

            recetaCardBody.appendChild(recetaHeading);
            recetaCardBody.appendChild(recetaButton);

            recetaCard.appendChild(recetaImagen);
            recetaCard.appendChild(recetaCardBody);

            recetaContenedor.appendChild(recetaCard);

            resultado.appendChild(recetaContenedor);

        });
    }

    function seleccionarReceta(id){
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

        fetch(url)
            .then(consulta => consulta.json())
            .then(receta => mostrarRecetaModal(receta.meals[0]))
    }

    function mostrarRecetaModal(receta){
        console.log(receta);
        const { idMeal, strInstructions, strMeal, strMealThumb } = receta;

        //añadir contenido al modal
        const modalTitle = document.querySelector('.modal .modal-title');
        const modalBody = document.querySelector('.modal .modal-body');

        modalTitle.textContent = strMeal;
        modalBody.innerHTML = `
            <img class="img-fluid" src="${strMealThumb}" alt="Receta de ${strMeal}" />
            <h3 class="my-3">Instructions:</h3>
            <p>${strInstructions}</p>
            <h3 class="my-3">Ingredientes y Cantidades:</h3>

        `;

        const listGroup = document.createElement('UL');
        listGroup.classList.add('list-group');

        //mostrar cantidades e ingredientes, tienen cantidad definidda en la api(1 al 20 k lokos)
        for(let i=0; i<=20; i++){
            if(receta[`strIngredient${i}`]){
                const ingrediente = receta[`strIngredient${i}`];
                const cantidad = receta[`strMeasure${i}`];

                const ingredienteLi = document.createElement('LI');
                ingredienteLi.classList.add('list-group-item');
                ingredienteLi.textContent = `${ingrediente} - ${cantidad}`;

                listGroup.appendChild(ingredienteLi);
            }
        }

        modalBody.appendChild(listGroup);

        //muestra el modal
        modal.show();
    }

    function limpiarHtml(selector){
        while(selector.firstChild){
            selector.removeChild(selector.firstChild);
        }
    }
}