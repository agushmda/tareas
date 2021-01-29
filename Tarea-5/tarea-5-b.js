//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

document.querySelector('#calcular').onclick = function(){
const horas = document.querySelectorAll('.horas');
const minutos = document.querySelectorAll('.minutos');
const segundos = document.querySelectorAll('.segundos');

let totalHoras = 0;
for(let i=0; i<horas.length; i++){
    totalHoras += Number(horas[i].value);
}

let totalMinutos = 0;
for(let i=0; i<minutos.length; i++){
    totalMinutos += Number(minutos[i].value);
}

let totalSegundos = 0;
for(let i=0; i<segundos.length; i++){
    totalSegundos += Number(segundos[i].value);
}

let segundosTotales = totalHoras * 3600 + totalMinutos * 60 + totalSegundos;
console.log(segundosTotales);

let horasFinales = Math.floor(segundosTotales / 3600);
let minutosFinales = Math.floor((segundosTotales % 3600) / 60);
let segundosFinales = Math.floor(segundosTotales % 60);

console.log(horasFinales);
console.log(minutosFinales);
console.log(segundosFinales);

document.querySelector('#tiempo-total').innerText = `${horasFinales}:${minutosFinales}:${segundosFinales}hs.`;
}
