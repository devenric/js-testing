let respuesta = prompt("Introduce tu nombre")
const fecha = new Date()
const date = fecha.getDate()
const año = fecha.getFullYear()
const mes = fecha.getMonth() + 1
const dia = fecha.getMinutes()
console.log(`${date}/${mes}/${año}`)
