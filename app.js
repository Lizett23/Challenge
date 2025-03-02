// este seria un array, donde almacena los nombres de los amigos
let amigos = [];

//crear funcion donde guarde los nombres en el array
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
    
     if (nombreAmigo === ""){
        alert("Porfavor, ingrese un nombre");
        return;
    }
    if (amigos.includes(nombreAmigo)){
        alert ("Ese nombre ya está participando, ingrese un apellido para identificarlo")
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();
}

function renderizarAmigos (){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML ="";  //esta linea de codigo es para limpiar los nombres en la casilla

    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo () {
    if (amigos.length === 0) {
        alert ("No hay amigos para sortear");
        return;
    }
    let amigoGanador = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById ("resultado");
    resultado.innerHTML = `El ganador es: ${amigoGanador}`;

   // let limpiarLista = document.getElementById("listaAmigos");
   // limpiarLista.innerHTML = "";

   // Confirmar si se desea reiniciar el juego
   let reiniciar = confirm("¡El ganador es " + amigoGanador + "! ¿Quieres reiniciar el juego?");
   if (reiniciar) {
       reiniciarJuego();
   }
}

function reiniciarJuego() {
   // Vaciar el array de nombres
   amigos = [];

   // Limpiar las listas en pantalla
   document.getElementById("listaAmigos").innerHTML = "";
   document.getElementById("resultado").innerHTML = "";

   // Dejar el campo de entrada vacío y listo para usar
   document.getElementById("amigo").value = "";
   document.getElementById("amigo").focus();

   alert("¡El juego ha sido reiniciado!");
}
