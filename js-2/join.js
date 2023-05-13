// escribe la función maxIndex acá

function join (array) {
    let acumulador = 0;
    let string = [];
    for (let i = 0; i < array.length; i ++) {
        acumulador = array[i];
        string.push(" " + acumulador);
    }
    return string.toString();
}


console.log(join(["carro", 9, "si", 7, "8", "Oscar", -3]))
