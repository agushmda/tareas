function calcularPromedio(array){
    let total = 0;
    for (i=0; i<array.length; i++){
        total += array[i];
    }
    return total / array.length;
}

