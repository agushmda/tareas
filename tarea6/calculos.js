function calcularPromedio(array){
    let total = 0;
    if (array && array.length){
        for (let i=0; i<array.length; i++){
            total += array[i];
        }
        total = total / array.length;
    }
    return total;
}

function calcularMayorNumero(array){
    let numeroMayor = "";
    if (array && array.length){
        console.log(array);
        numeroMayor = array[0];
        for (let i=1; i<array.length; i++){
            if(numeroMayor < array[i]){
                numeroMayor = array[i];
            }
        }
    }
    return numeroMayor;
}

function calcularMenorNumero(array){
    let numeroMenor = "";
    if (array && array.length){
        numeroMenor = array[0];
        for (let i=1; i<array.length; i++){
            if(numeroMenor > array[i]){
                numeroMenor = array[i];
            }
        }
    }
    return numeroMenor;
}

function calcularNumeroMensual(array){
    let totalSueldo = "";
    if (array && array.length){
        totalSueldo = 0;
        for (let i=0; i<array.length; i++){
            totalSueldo += array[i];
        }
    }
    return totalSueldo / 12;
}
