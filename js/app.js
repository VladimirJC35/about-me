//"use strict";

const numeroMaxIntentos = 4;
const numeroAAdivinar = 43;
let contadorDeIntentos = 1;
const colorfavorito = ["Azul Marino", "Verde", "Turquesa"];
const numMaxIntento = 6;
let contarIntento = 1;
let contadorbien = 0;
let contadormal = 0;

puntos = 0;
const afirmativo = "Si";
const negativo = "No";


function preguntarNombreUsuario() {
    let usuario = prompt("¿ Cual es tu nombre/apodo ?");
    alert('Mucho gusto ' + usuario)
}


function generadorPregunta() {
    const preguntas = [
        "¿Tengo un segundo nombre? Si/No",
        "¿Trabajo actualmente?, Si / No?",
        "¿Nací en Ayacuho?, Si / No",
        "¿Inicié a estudiar Ingeniería, en Lima?, Si / No",
        "¿Tengo el titulo de la Maestría?, Si / No",
    ];
    for (let i = 0; i < preguntas.length; i++) {
        compararRespuesta(preguntas[i]);
    }
}
// Convirtiendo funciones, Respuestas afirmativas
function compararRespuesta(textodePregunta) {
    const pregunta = prompt(textodePregunta);
    if (afirmativo.toLowerCase() === pregunta.toLowerCase()) {
        alert("Respuesta Correcta");
        puntos += 1;
        console.log("Correcto");
    } else {
        alert("Respuesta Incorrecta");
        console.log("Incorrecto");
    }
}
preguntarNombreUsuario();
generadorPregunta();

/*function segundoNombre (){
    compararRespuesta("¿Tengo un segundo nombre? Si/No");
}

function trabajoActual(){
    compararRespuesta("¿Trabajo actualmente?, Si / No?");
}

function lugarNacimiento(){
    compararRespuesta("¿Nací en Ayacuho?, Si / No");
}

function lugarDeEstudio(){
    compararRespuesta("¿Inicié a estudiar Ingeniería, en Lima?, Si / No");
}

function gradoMaestria (){
    compararRespuesta("¿Tengo el titulo de la Maestría?, Si / No");
}

preguntarNombreUsuario();
segundoNombre();
trabajoActual();
lugarNacimiento();
lugarDeEstudio();
gradoMaestria();
*/

//Usando un array


//Pregunta 6 
while (contadorDeIntentos <= numeroMaxIntentos) {
    const numeroPorUsuario = Number(prompt("¿Cual es mi edad?, ingresa Números"));

    if (numeroPorUsuario === numeroAAdivinar) {
        alert("Felicidades!!! adivinaste mi edad " + numeroAAdivinar)
        alert("Lo hiciste en " + contadorDeIntentos + " intentos");
        break;
    } if (numeroPorUsuario > numeroAAdivinar) {
        alert(numeroPorUsuario + "  Estimación demasiado alta ");
    } else {
        alert(numeroPorUsuario + "  Estimación demasiado baja ")

    }
    contadorDeIntentos++;
    if (contadorDeIntentos === numeroMaxIntentos + 1) {
        alert("Llegaste al número max de intentos :(");
    }
}


let coloringresado = prompt("Adivina mi color favorito...!,Tienes " + numMaxIntento + " intentos..")

for (let i = 1; i <= numMaxIntento; i++) {

    for (let j = 0; j < colorfavorito.length; j++) {
        if (coloringresado.toUpperCase() == colorfavorito[j].toUpperCase()) {
            alert("Acertaste !!! Felicitaciones!!");
            i = numMaxIntento + 1;
            break
        }

    }

    if (i < numMaxIntento) {
        coloringresado = prompt("No acertaste..! Sigue intentando te quedan " + (numMaxIntento - 1) + " intentos");
    } else if (i == numMaxIntento) {
        alert("Éxitos en tu opróximo intento ...!");
    }

}


//alert (usuario+"  Ud. tiene:  "+ puntos+"  Repuestas correctas");