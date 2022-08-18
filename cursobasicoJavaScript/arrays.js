var personas = ["Edwar", "Sebas", "Diego", "Efren"];

console.log(personas);
console.log(personas.length);
console.log(personas[0])

var masPersonas = personas.push("Melvin")//agregar
console.log(personas);

var ultimo = personas.pop("Melvin")//Eliminar

var nuevoPersona= personas.unshift("Sandra");//Agrega al inio

var borrarPersona =  personas.shift("sandra"); //borrar la el dato pero que este en el inicio

var posicion = personas.indexOf("Diego");
posicion;