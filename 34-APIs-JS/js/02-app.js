// intersection observer, permite identificar cuando un elemento esta visible en el viewport

document.addEventListener('DOMContentLoaded', () => {

    //aplicaciones comunes son scroll infinito(fb, ig) o lazy loading(carga diferida) sobre todo en imgs

    //habilitamos el observer
    const observer = new IntersectionObserver( entries => {
        //console.log(entries[0]);

        if(entries[0].isIntersecting){
            console.log('Este elemento ya es visible');
        }else{
            console.log('Ya no esta en el viewport');
        }
    })

    //seleccionamos que elemento observar
    observer.observe(document.querySelector('.premium'));
});