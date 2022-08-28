//Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];


//Event listeners
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
}





//funciones
function agregarTweet(e) {
    e.preventDefault();

    //Text Area donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;
    

    //Validación....
    if(tweet === '') {
        mostrarError("Un mensaje no puede ir vacio");
        return; //Evita que se ejecuten mas lineas de codigo
    }

    console.log("Agregando tweet")
}

//Mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');


    //Insertarlo ene l contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //Elimina la alerta después de 3 segundos

    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}