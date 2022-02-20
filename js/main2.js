let localStorageIndex = localStorage.length;


function guardarInformacionLocalStorage(){
    
    let nombre = document.querySelector('#nombre').value;
    let descripcionRegalo = document.querySelector('#descripcion-regalo').value;
    let key = `user ${localStorageIndex}`;
    
    localStorage.setItem(key, JSON.stringify(
        {
            username: nombre,
            descripcion: descripcionRegalo
        }
    ));
    localStorage.length++;
}

function mostrarDeseos(){
    
    let contenedor = document.querySelector('.wish-list');
    
    for(let i = 0; i < localStorage.length; i++){
    let elementoLista = document.createElement('li');
    let descripcion = JSON.parse(localStorage.getItem(`user ${i}`)).descripcion
    elementoLista.appendChild(document.createTextNode(descripcion));
    contenedor.appendChild(elementoLista);
    }
    
}