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
    let newelement = document.createElement('li');
    let texto = prompt("escribe el texto");
    newelement.className = '.nuevoelemento';
    newelement.textContent = texto;
    let newelement = document.getElementsByClassName('.nuevoelemento');
    newelement.appendChild(nuevoelemento);
}
else {confirm(`adios,${user}`);}
