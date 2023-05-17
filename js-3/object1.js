// 1. Crear una variable llamada pedro
let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"],
    /*saluda: function () {
        console.log("Hola, me llamo: " + this.nombre);
    }*/
  };

// 2. Imprimir en consola el valor de la llave edad
console.log(pedro.edad);

// 3. Agrega una propiedad con llave estatura y valor 1.8
pedro.estatura = 1.8;
//console.log(pedro.estatura);

// 4. Elimina la propiedad con llave activo
delete pedro.activo;
//console.log(pedro.activo);

// 5. Recorre todas las propiedades e imprímelas en consola (una línea por propiedad y separando la llave y el valor con dos puntos :).
let llaves = Object.keys(pedro);
  for (let i=0; i < llaves.length; i++) {
    let llave = llaves[i];
    //console.log(llave + ": " + pedro[llave]);
  }

// 6. Agrégale al objeto una función llamada saluda que retorne la frase “Hola, me llamo ” seguido del nombre de la persona.
pedro.saluda = function () {
  //console.log("Hola, me llamo: " + this.nombre);
}

// 7. Llama la función saluda y verifica el resultado, debería decir “Hola, me llamo Pedro Perez”.
pedro.saluda();