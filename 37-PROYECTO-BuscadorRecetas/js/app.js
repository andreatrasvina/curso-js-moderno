
document.addEventListener('DOMContentLoaded', iniciarApp);

function iniciarApp(){
    const selectCategorias = document.querySelector('#categorias');
    selectCategorias.addEventListener('change', seleccionarCategoria);

    const resultado = document.querySelector('#resultado');

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

    function limpiarHtml(selector){
        while(selector.firstChild){
            selector.removeChild(selector.firstChild);
        }
    }
}