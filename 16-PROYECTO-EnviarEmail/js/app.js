//SE EJECUTA HASTA QUE SE CARGUE EL DOCUMENTO HTML
document.addEventListener('DOMContentLoaded', function() {

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    //SELECCIONAR LOS ELEMENTOS DE LA INTERFAZ
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const inputCC = document.querySelector('#cc');

    const formulario = document.querySelector('#formulario');

    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');

    const spinner = document.querySelector('#spinner');

    //ASIGNAR EVENTOS A LOS ELEMENTOS
    inputEmail.addEventListener('input', validar);//no se ponen los parentesis de la funcion porque no se manda a llamar inmediatamente
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);
    inputCC.addEventListener('input', validar);

    btnReset.addEventListener('click', function(e) {
        e.preventDefault();

        resetFormulario();
    })

    formulario.addEventListener('submit', enviarEmail);

    function enviarEmail(e){
        e.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            //reiniciar el objeto
            resetFormulario();

            //crear alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mensaje enviado correctamente';

            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 3000);

        }, 3000);
    }

    //reemplazar callback por una funcion para que el codigo no sea tan repetitivo
    function validar(e){
        if(e.target.value.trim() === ''){ //en un formulario se recomienda poner el metodo trim() para eliminar los espacios en blancos
            
            if(e.target.id==='cc'){
                console.log('este campo no es obligatorio');
                
            }else{
                mostrarAlerta('El campo '+e.target.id+' es obligatorio  ', e.target.parentElement);
            }
            email[e.target.name] = '';
            comprobarEmail();
            return; //detiene la ejecucion
        }

        if((e.target.id === 'email' && !validarEmail(e.target.value)) || (e.target.id === 'cc' && !validarEmail(e.target.value)) ){
            mostrarAlerta('El campo Email no es valido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        limpiarAlerta(e.target.parentElement);

        //si el codigo llega hasta aqui quiere decir que hemos pasado por laws validaciones

        //asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();

        console.log(email);//se puede ver el objeto siendo llenado

        comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia){
        //comprueba si ya existe una alerta
        limpiarAlerta(referencia);

        //generar alerta en html, crear el elemento html
        //se recomienda poner el nombre de la etiqueta en mayusculas
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('alerta', 'bg-red-600', 'text-white', 'p-2');
    
        //Inyectar el error al formulario o html
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia){
        //comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.alerta');
        if(alerta){
            alerta.remove();
        }

        if (email.cc === '') {
            alerta.remove();
        }
    }

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        console.log(resultado); 
        return resultado;
    }

    function comprobarEmail(){
        if (email.cc === '') {
            delete email.cc;
        }

        if(Object.values(email).includes('')){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
        }else{
            btnSubmit.classList.remove('opacity-50');
            btnSubmit.disabled = false;
        }
    }

    function resetFormulario(){
        //reiniciar el objeto
        email.email = '';
        email.asunto = '';
        email.mensaje = '';
        email.cc = '';
        formulario.reset();
        comprobarEmail();
    }
});