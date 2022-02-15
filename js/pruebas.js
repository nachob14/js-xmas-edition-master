function probarValidarNombre(){
    console.assert(
    validarNombre('') === 'El nombre debe tener al menos 1 caracter', 
    'Validar nombre no funciono con un string vacio');

    console.assert(
    validarNombre('asdasd123') === 'El nombre solo puede contener letras',
    'Validar nombre no funciono con numeros'
    )

    console.assert(
    validarNombre('isdjaidashufhasuhdasuibhebvuirhuiefhfauihaiufhaaiudhjsahdasjdshdufhauehuehfuafhaeufahfufh') === 'El nombre debe tener menos de 50 caracteres',
    'Validar nombre no funciono con un string mayor a 50 caracteres'
    )

}

function probarValidarCiudad(){
    console.assert(
        validarCiudad('Buenos Aires') === '', 
        'Validar ciudad no funciono con un string valido');

    console.assert(
        validarCiudad('') === 'La ciudad debe tener al menos 1 caracter',
        'Validad ciudad no funciono con un string vacio'
    )
    
    
    
}

function probarValidarDescripcion(){
    console.assert(
        validarDescripcionRegalo('') === 'La descripcion debe tener al menos 1 caracter', 
        'Validar descripcion no funciono con un string vacio');
    
    console.assert(
        validarDescripcionRegalo('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdkajsdslkdjaajiofeqjiuewnivuvnreiuvnruincwecuicnwcuinweiucncewuicncewuinuiweneuifewfiufhewuihfweufhiuewhfui') === 'La descripcion debe tener menos de 100 caracteres',
        'Validar descripcion no funciono con un string mayor a 50 caracteres')
    
    }
    console.assert(
        validarDescripcionRegalo('Regalo') === '',
        'Validar descripcion no funciono con un string valido'
    )
    console.assert(
        validarDescripcionRegalo('.,.,.,,,.') === 'La descripcion solo puede contener numeros y letras',
        'Validar descripcion no valido que fueran numeros y letras'
    )






probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcion();

