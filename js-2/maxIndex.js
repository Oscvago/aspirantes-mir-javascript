// escribe la función maxIndex acá

function maxIndex (array) {
    let acumulador = 0;
    for (let i = 0; i < array.length; i ++) {
        
        if (array[i] > acumulador) {
            acumulador = array[i];
            indice = i;            
        } else {
            i ++;
        } 
    } if (acumulador === 0) {
        indice = -1;
    }
    return indice
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1