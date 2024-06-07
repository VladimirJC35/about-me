//"use strict";
const respuesta1="No";
const respuesta2="Si";
const respuesta3="Si";
const respuesta4="No";
//const pregunta1 = "No";
//const pregunta2 = "Si";
//const pregunta3 = "Si";
//const pregunta4 = "N0";
let contadorbien = 0;
let contadormal = 0;
puntos =0;
//let mensaje = usuario + " Tiene " + puntos + " respuestas correctas ";
let usuario = prompt("¿ Cual es tu nombre/apodo ?");
        alert('Mucho gusto '+ usuario)
const pregunta1 = prompt ("¿Tengo un segundo nombre?, Si / No");
if (respuesta1.toLowerCase()===pregunta1.toLowerCase()) {
    alert("Respuesta Correcta")
    puntos +=1;
} else { alert("Respuesta Incorrecta")}

const pregunta2 = prompt ("¿Trabajo actualmente?, Si / No?");
if (respuesta2.toLowerCase()===pregunta2.toLowerCase()) {
    alert("Respuesta Correcta")
    puntos +=1;
} else {alert("Respuesta Incorrecta")}

const pregunta3 = prompt ("¿Nací en Ayacuho?, Si / No");
if (respuesta3.toLowerCase()===pregunta3.toLowerCase()) {
    alert("Respuesta Correcta")
    puntos +=1;
} else {alert("Respuesta Incorrecta")}

const pregunta4 = prompt ("¿Inicié a estudiar Ingeniería, en Lima?, Si / No");
if (respuesta4.toLowerCase()===pregunta4.toLowerCase()) {
    alert("Respuesta correcta")
    puntos +=1;
} else {alert("Respuesta Incorrecta")}
alert (usuario+"  Ud. tiene:  "+ puntos+"  Repuestas correctas");