const fecha = new Date();
const date = fecha.getDate();
const año = fecha.getFullYear();
const mes = fecha.getMonth() + 1;
const dia = fecha.getMinutes();
console.log(`${date}/${mes}/${año}`);
console.log("hola");

const content = document.querySelector('.content');
let respuesta = prompt("rojo o azul?");
if (respuesta == "rojo") {
    content.style.backgroundColor = "red";
}
else {content.style.backgroundColor = "blue";}
