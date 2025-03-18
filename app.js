// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Crear un array para almacenar los nombres
let amigos = [];
function imprimirLista() {
    console.log(amigos.length)
}
//Implementa una función para agregar amigos
function agregarAmigo() {
    //Capturar el valor del campo de entrada
    let nombreAmigos = document.getElementById("amigo");
    let nombre = nombreAmigos.value.trim();
    //Validar la entrada
    if (nombre === "") {
        alert("Por favor inserte un nombre");
    } else {
        //Actualizar el array de amigos
        amigos.push(nombre);
        nombreAmigos.value ="";
        actualizarLista();
        limpiarCaja();
    }
    return;
}
//Limpiar el campo de entrada
function limpiarCaja(){
    document.getElementById("amigo").value = '';
}
//Actualizar lista
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    } 
}
//Sortear amigo
function sortearAmigo(){
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];
    mostrarResultado(amigoSecreto);
}

function mostrarResultado(amigoSecreto) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    let li = document.createElement("li");
    li.textContent =  `El amigo secreto es: ${amigoSecreto}`;
    listaResultado.appendChild(li);
}
