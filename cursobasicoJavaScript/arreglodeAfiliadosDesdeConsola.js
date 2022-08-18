function persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this. edad = edad;
}

var personas=[];
var miFuncion = function(){

    for(let i = 0 ; i < 3 ; i++){
        var nombre = prompt("Ingresa nombre");
        var apellido = prompt("Ingresa apellido");
        var edad = prompt("Ingresa edad");
        personas.push(new persona (nombre, apellido, edad));

    //     var opcion = prompt("quieres seguir registrando afiliados?")
    //     if(valor==0){
    //         console.log("hasta luego....")
    //         break;
            
    //   }
    }

}

miFuncion();
    
   
