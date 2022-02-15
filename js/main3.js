
function obtenerNumeroAleatorio(limite){
    let resultado = Math.floor(Math.random() * limite) + 1;
    return resultado;
}

const comportamiento = {
    1: 'Very good',
    2: 'Good',
    3: 'Naughty'
}

function obtenerComportamiento(){
    let numero = obtenerNumeroAleatorio(3);
    let comportamientoAleatorio = comportamiento[numero];
    let texto = document.createTextNode(comportamientoAleatorio)
    let contenedor = document.querySelector('.attitude');
    contenedor.appendChild(texto);
}

function obtenerRegaloAleatorio(){
    let numero = obtenerNumeroAleatorio(localStorageIndex - 1);
    let regalo = JSON.parse(localStorage.getItem(`user ${numero}`)).descripcion;
    let texto = document.createTextNode(regalo);
    let contenedor = document.querySelector('.santa-gift-text');
    contenedor.appendChild(texto)

}

let imageUrlLista = {
    1: 'img/gifts/goldGift.jpg',
    2: 'img/gifts/groupGift.jpeg',
    3: 'img/gifts/redGift.jpg'
};

function obtenerImagen(){
    let numero = obtenerNumeroAleatorio(3);
    let imagen = imageUrlLista[numero];
    const regaloSanta = document.querySelector('.santa-gift');
    regaloSanta.src = imagen;
}

function obtenerContenido(){
    obtenerComportamiento();
    obtenerRegaloAleatorio();
    obtenerImagen();
}

