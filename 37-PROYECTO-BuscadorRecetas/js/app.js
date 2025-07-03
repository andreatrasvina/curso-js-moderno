
document.addEventListener('DOMContentLoaded', iniciarApp);

function iniciarApp(){
    const selectCategorias = document.querySelector('#categorias');

    if(selectCategorias){
        selectCategorias.addEventListener('change', seleccionarCategoria);
        obtenerCategorias();
    }

    const resultado = document.querySelector('#resultado');
    const modal = new bootstrap.Modal('#modal', {});

    const favoritosDiv = document.querySelector('.favoritos');
    if(favoritosDiv){
        obtenerFavoritos();
    }


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
            recetaImagen.alt = `imagen de la receta: ${strMeal ?? categoriaReceta.titulo}`;
            recetaImagen.src = strMealThumb ?? categoriaReceta.img;

            const recetaCardBody = document.createElement('DIV');
            recetaCardBody.classList.add('card-body');

            const recetaHeading = document.createElement('H3');
            recetaHeading.classList.add('card-title', 'mb-3');
            recetaHeading.textContent = strMeal ?? categoriaReceta.titulo;

            const recetaButton = document.createElement('BUTTON');
            recetaButton.classList.add('btn', 'btn-danger', 'w-100');
            recetaButton.textContent = 'Ver Receta'; 
            // recetaButton.dataset.bsTarget = "#modal";
            // recetaButton.dataset.bsToggle = "modal";
            recetaButton.onclick = function() {
                seleccionarReceta(idMeal ?? categoriaReceta.id);
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

        //agregar botones favorito y cerrar dinamicos
        const modalFooter = document.querySelector('.modal-footer');
        limpiarHtml(modalFooter);

        const btnFavorito = document.createElement('BUTTON');
        btnFavorito.classList.add('btn', 'btn-danger', 'col');
        btnFavorito.textContent = existeStorage(idMeal) ? 'Eliminar Favorito' : 'Guardar Favorito';

        //almacenar y quitar de localstorage
        btnFavorito.onclick = function(){

            if(existeStorage(idMeal)){
                eliminarFavorito(idMeal);
                btnFavorito.textContent = 'Guardar Favorito';
                mostrarToast('Eliminado correctamente');
                return;
            }

            agregarFavorito({
                id: idMeal,
                titulo: strMeal,
                img: strMealThumb
            });
            btnFavorito.textContent = 'Eliminar Favorito';
            mostrarToast('Agregado correctamente');


        }

        const btnCerrar = document.createElement('BUTTON');
        btnCerrar.classList.add('btn', 'btn-secondary', 'col');
        btnCerrar.textContent = 'Cerrar';
        btnCerrar.onclick = function(){
            modal.hide();
        }

        modalFooter.appendChild(btnFavorito);
        modalFooter.appendChild(btnCerrar);

        //muestra el modal
        modal.show();
    }

    function agregarFavorito(receta){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []; 
        localStorage.setItem('favoritos', JSON.stringify([...favoritos, receta]));
    }

    function existeStorage(id){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []; 
        return favoritos.some(favorito => favorito.id === id);
    }

    function eliminarFavorito(id){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []; 
        const nuevosFavoritos = favoritos.filter(favorito => favorito.id !== id);
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    }

    function obtenerFavoritos(){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []; 
        if(favoritos.length){
            mostrarRecetas(favoritos);
            return
        }

        const sinFavoritos = document.createElement('P');
        sinFavoritos.textContent = 'No hay favoritos aún';
        sinFavoritos.classList.add('fs-4', 'font-bold', 'mt-5');

        resultado.appendChild(sinFavoritos);
    }

    function mostrarToast(mensaje){
        const toastDiv = document.querySelector('#toast');
        const toastBody = document.querySelector('.toast-body');
        const toast = new bootstrap.Toast(toastDiv);

        toastBody.textContent = mensaje;

        toast.show();
    }

    function limpiarHtml(selector){
        while(selector.firstChild){
            selector.removeChild(selector.firstChild);
        }
    }
}