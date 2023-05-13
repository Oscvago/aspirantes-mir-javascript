// escribe la función max acá

function max (array) {
    let acumulador = 0;
    for (let i = 0; i < array.length; i ++) {
        
        if (array[i] > acumulador) {
            acumulador = array[i];
        } else {
            i ++;
        } 
    } if (acumulador === 0) {
        acumulador = "undefined";
    }
    return acumulador
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined