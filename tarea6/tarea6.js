/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


document.querySelector('#ejecutar-calculo').onclick = function(){
    const totalGrupoFamiliar = Number(document.querySelector('#total-personas').value);

    for (let i=0; i<totalGrupoFamiliar; i++){
        crearIntegrante(i);
    }

 return false;
}


document.querySelector('#calcular-edad').onclick = function(){

console.log(calcularPromedio(obtenerEdades()));
console.log(calcularMayorNumero(obtenerEdades()));

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
    $label.textContent = 'Edad del integrante #: ' + (indice + 1);
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
