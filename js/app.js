function obtenerFecha(){

let fecha = new Date();

//console.log(fecha)
//console.log(fecha.getMonth())// 0 - 11, 0 --> enero
//console.log(fecha.getDay())// 1 a 31
//console.log(fecha.getDate())// 0 al 6; 0 ---> Domingo

let semanas = ["Domingo", "Lunes", "Martes","Miércoles", "Jueves","Viernes", "Sábado"];

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let fechaReloj = document.querySelector("#fecha");

fechaReloj.innerHTML = `${semanas[fecha.getDate()]} ${fecha.getDay()} de ${meses[fecha.getMonth()]} del ${fecha.getFullYear()}`

//creo las varianles para crear la hora

let hora = fecha.getHours();

let minutos = fecha.getMinutes();

let segundos = fecha.getSeconds();

let horaReloj = document.querySelector("#hora")

if(hora<10){
    hora = "0" + hora;
}

if(segundos<10){
    segundos = "0" + segundos;
}

horaReloj.innerHTML = `${hora}:${minutos}:${segundos}`

}

//invocar al Reloj cada segundo

setInterval(obtenerFecha, 1000);