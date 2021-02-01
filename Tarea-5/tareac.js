//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const numeros = document.querySelectorAll('li');

function calcularPromedio(n1){
    return Math.round(n1 / numeros.length);
}

document.querySelector('#calcular-promedio').onclick = function(){
let totalNotas = 0;
for (i=0; i<numeros.length; i++){
    totalNotas += Number(numeros[i].innerText);
}
const notaFinal = calcularPromedio(totalNotas);
document.querySelector('#promedio-final').innerText = notaFinal;
console.log(calcularPromedio(totalNotas));

}


document.querySelector('#numero-mas-pequeño').onclick = function(){

let minimo = 1;
for (let i = 0; i < numeros.length ; i++) {
    if (Number(numeros[i].innerText) < minimo) {
        minimo = Number(numeros[i].innerText);
    }
}
console.log('Valor mínimo: ' + minimo);

}


document.querySelector('#numero-mas-grande').onclick = function(){

let maximo = 1;
for (let i = 0; i < numeros.length ; i++) {
    if (Number(numeros[i].innerText) > maximo) {
        maximo = Number(numeros[i].innerText);
    }
}
console.log('Valor maximo: ' + maximo);
        
}
    