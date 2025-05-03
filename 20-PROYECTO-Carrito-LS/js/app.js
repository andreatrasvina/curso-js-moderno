//variables 
const carrito = document.querySelector('#carrito');
const contenedorCarrito =document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){
    //agregar un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);//se puede o no poner el parentesis en la funcion

    //elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //recupera la informacion de local storage
    document.addEventListener('DOMContentLoaded', ( ) => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

        carritoHTML();
    })

    //vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; //reseteamos el carrito

        limpiarHTML(); //se elimina el html
    });
}

//funciones
function agregarCurso(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

//eliminar un curso del carrito
function eliminarCurso(e){
    //console.log(e.target.classList); IDENTIFICAR QUE CLASE SE ESTA CLICKEANDO
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        //elimina del arreglo por el ID usando un filter
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        console.log(articulosCarrito);

        //volvemos a iterar sobre el carrito y mostrar su html
        carritoHTML();
    }
}

//lee el contenido html seleccinado y extrae la informacion
function leerDatosCurso(curso){
    console.log(curso);

    //crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }

    //Revisa si un elemento ya existe dentro del carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);

    if(existe){
        //solo actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;

                return curso; //retorna los objetos actualizados
            }else{
                return curso; //retorna los objetos que no son los duplicados
            }
        });
        
        articulosCarrito = [...cursos];
    }else{
        //lo agregamos al carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    //agregar elementos al carrito de compras con spread operator
    //se necesita una copia del arreglo con la referencia de los objetos agregados antes para que no se borren
    //articulosCarrito = [...articulosCarrito, infoCurso];
    console.log(articulosCarrito);

    carritoHTML();

}

//Mostrar el carrito de compras en el html
function carritoHTML(){

    //Limpia el hmtl
    limpiarHTML();

    //Recorre el carrito y genera el html
    articulosCarrito.forEach( curso => {

        //aplicar destructurizacion para minimizar el codigo
        const {imagen, titulo, precio, cantidad, id} = curso;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>

            <td> ${titulo} </td>

            <td> ${precio} </td>

            <td> ${cantidad} </td>

            <td>
                <a href="#" class="borrar-curso" data-id="${id}" > X </a>
            </td>
        `;

        //agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });

    //agregar carrito de compras al local storage
    sincronizarStorage();
}

function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

//Elimina los cursos repetidos del tbody
function limpiarHTML(){
    //forma lenta
    //contenedorCarrito.innerHTML = '';

    //forma rapida
    while(contenedorCarrito.firstChild){ //mientras haya un elemento hijo de ese padre se ejecutara el while
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);//se elimina el repetido
    }
}