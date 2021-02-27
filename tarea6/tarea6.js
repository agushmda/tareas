/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


document.querySelector('#ejecutar-calculo').onclick = function(){
    const totalGrupoFamiliar = Number(document.querySelector('#total-personas').value);
    document.querySelector('#integrantes').innerHTML = ""; 
    for (let i=0; i<totalGrupoFamiliar; i++){
        crearIntegrante(i);
    }

 return false;
}


document.querySelector('#calcular-edad').onclick = function(){

  document.querySelector('#edad-promedio').innerText = `La edad promedio es ${calcularPromedio(obtenerEdades())}`;
  document.querySelector('#edad-mas-grande').innerText = `La edad mas grande es ${calcularMayorNumero(obtenerEdades())}`;
  document.querySelector('#edad-mas-chica').innerText = `La edad mas chica es ${calcularMenorNumero(obtenerEdades())}`;
  document.querySelector('#sueldo-mayor').innerText = `El mayor sueldo es ${calcularMayorNumero(obtenerSueldos())}`
  document.querySelector('#sueldo-menor').innerText = `El menor sueldo es ${calcularMenorNumero(obtenerSueldos())}`
  document.querySelector('#sueldo-promedio').innerText = `El promedio del sueldo es ${calcularPromedio(obtenerSueldos())}`
  document.querySelector('#sueldo-mensual').innerText = `El promedio del sueldo mensual es ${calcularNumeroMensual(obtenerSueldos())}`
  return false;
}

document.querySelector('#resetear').onclick = function(){
  document.querySelector('#datos').innerHTML = "";
}



function obtenerEdades(){
  const edades = document.querySelectorAll('.edades-familia');
  let totalEdades = [];
  for (let i=0; i<edades.length; i++){
    totalEdades.push(Number(edades[i].value));
  }
  return totalEdades;

}


function crearIntegrante(indice) {
    const $div = document.createElement('div');
    $div.className = 'integrante';
  
    const $label = document.createElement('label');
    $label.textContent = 'Edad del integrante: ' + (indice + 1);
    const $input = document.createElement('input');
    $input.type = 'number';
    $input.className = 'edades-familia';
  
    $div.appendChild($label);
    $div.appendChild($input);
  
    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);
  }


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/


document.querySelector('#agregar').onclick = function(){

  const $div = document.createElement('div');
  $div.className = 'salario';

  const $label = document.createElement('label');
  $label.textContent = 'Salario anual ';
  const $input = document.createElement('input');
  $input.type = 'number';
  $input.className = 'sueldos-familia'

  $div.appendChild($label);
  $div.appendChild($input);

  const $salarios = document.querySelector('#salarios');
  $salarios.appendChild($div);
  
}

document.querySelector('#quitar').onclick = function(){
  const $salario = document.querySelectorAll('.salario');
  for (i=0; i<$salario.length; i++){
    $salario[i].remove();
  }

}

function obtenerSueldos(){
  const sueldos = document.querySelectorAll('.sueldos-familia');
  let totalSueldos = [];
  for(i=0; i<sueldos.length; i++){
    totalSueldos.push(Number(sueldos[i].value));
  }
  return totalSueldos;
}

