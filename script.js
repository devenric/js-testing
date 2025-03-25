const fecha = new Date();
const date = fecha.getDate();
const año = fecha.getFullYear();
const mes = fecha.getMonth() + 1;
const dia = fecha.getMinutes();
console.log(`${date}/${mes}/${año}`);
console.log("hola");

let user = prompt("cual es tu nombre?");
const content = document.querySelector('.content');
let respuesta = prompt("rojo o azul?");
if (respuesta == "rojo") {
    content.style.backgroundColor = 'red';
}
else {content.style.backgroundColor = 'blue';}

let respuesta2 = prompt("quieres crear un texto?");
if (respuesta2 == "si") {
    let texto = prompt("escribe el texto");
    document.createElement('p');
    texto.className = 'nuevoelemento';
    texto.textContent = texto;
    let newelement = document.querySelector('nuevoelemento');
    content.appendChild('ul');
}
else {confirm(`adios,${user}`);}
