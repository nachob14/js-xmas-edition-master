const nombre = document.formulario.nombre.value;

const ciudad = document.formulario.ciudad.value;

const comportamiento = document.formulario.comportamiento.value;

const descripcionRegalo = document.formulario['descripcion-regalo'].value;

function validarNombre(nombre){
    if(nombre.length === 0){
        return 'El nombre debe tener al menos 1 caracter';
    }

    if(!/^[A-z]+$/i.test(nombre)){
        return 'El nombre solo puede contener letras'
    }

    if(nombre.length >= 50){
        return 'El nombre debe tener menos de 50 caracteres';
    }
   
    return '';
}

function validarCiudad(ciudad){
    if(ciudad.length === 0){
        return 'La ciudad debe tener al menos 1 caracter';
    }
    
    return '';
}

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length === 0){
        return 'La descripcion debe tener al menos 1 caracter';
    }
    if(descripcionRegalo.length >= 100){
        return 'La descripcion debe tener menos de 100 caracteres';
    }
    if(!/^[a-z0-9 ]+$/i.test(descripcionRegalo)){
        return 'La descripcion solo puede contener numeros y letras'
    }
    return '';
}

function validarFormulario(event){
    const $form = document.querySelector('#carta-a-santa');
    const nombre = $form.nombre.value
    const errorNombre = validarNombre(nombre);

    const ciudad = $form.ciudad.value;
    const errorCiudad = validarCiudad(ciudad);

    const descripcionRegalo = $form['descripcion-regalo'].value;
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    }

    const esExito = manejarErrores(errores) === 0;

    if(esExito){
        $form.className = 'oculto';
        document.querySelector('#exito').className = '';
        redireccionar();
    } 


    event.preventDefault();
}

function manejarErrores(errores){
    let cantidadErrores = 0;
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
   
    while($errores.firstChild){
        $errores.removeChild($errores.firstChild);
    };

    keys.forEach(function(key){
        const error = (errores[key])

        if(error){
            cantidadErrores++;
            $form[key].className = 'error';

            const $error = document.createElement('li');
            $error.innerText = error;
    
            $errores.appendChild($error);
        } else {
            $form[key].className = '';
            guardarInformacionLocalStorage();
        }

        
    });
    
   return cantidadErrores;
   
}

const $form = document.querySelector('#carta-a-santa')
$form.onsubmit = validarFormulario;

function redireccionar(){
    const timeout = 5000;

    setTimeout(function(){
        window.location.href = 'wishlist.html';
    }, timeout)
}
