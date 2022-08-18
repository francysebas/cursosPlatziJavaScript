var personas = ["Edwar", "Sebas", "Diego", "Efren"];

function saludarPersonas(persona){
    console.log(`hola, ${persona}`);
}

//for y forloop
for(var i = 0; i < personas.length; i++){
    saludarPersonas(persona[i]);
}

for(var persona of personas){
    saludarPersonas(persona)
}

// while
while(personas.length > 0){
    var persona = personas.shift();
    saludarPersonas(persona)
}