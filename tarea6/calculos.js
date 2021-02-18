function calcularPromedio(array){
    let total = 0;
    for (let i=0; i<array.length; i++){
        total += array[i];
    }
    return total / array.length;
}

function calcularMayorNumero(array){
    let numeroMayor = array[0];
    for (let i=1; i<array.length; i++){
        if(numeroMayor < array[i]){
            numeroMayor = array[i];
        }
    }
    return numeroMayor;
}
