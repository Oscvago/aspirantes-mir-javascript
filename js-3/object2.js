// 1.
let persona = {
  Nombre: "Marta",
  Edad: 35,
  Ciudad: "Bogotá",
  Profesion: "Ingeniera"
};

// 2.
//console.log(persona);

// 3.
function presentacion(objeto) {
  let datos = "";  

  for (llave in objeto) {
      if (llave === "Profesion") {
          llave ++
      } else {
          datos = datos + llave + ": ";
          datos = datos + objeto[llave] + ", ";
      }
  
  } return datos;
}

// 4. 
let mensaje = presentacion(persona);

// 5.
//console.log(mensaje);

// 6.
persona.Hobbies = ["correr", "leer", "estudiar", "jugar"];

// 7.
//console.log(persona);

// 8.
for (i in persona.Hobbies) {
  //console.log(persona.Hobbies[i]);
}