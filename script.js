const fecha = new Date();
const date = fecha.getDate();
const año = fecha.getFullYear();
const mes = fecha.getMonth() + 1;
const dia = fecha.getMinutes();
console.log(`${date}/${mes}/${año}`);
console.log("hola");

let respuesta = prompt("rojo o azul?");
if (respuesta == "rojo") {
    body.style.backgroundColor = "red";
}
else {body.style.backgroundColor = "blue";}
let parrafonuevo = document.querySelector(".parrafo");
const p = document.createElement("p");
