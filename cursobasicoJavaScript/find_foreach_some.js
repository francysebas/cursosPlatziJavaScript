var afiliados = [
    {nombre:"francy", apellido: "narvaez", edad: 20},
    {nombre:"Diego", apellido: "narvaez", edad: 21},
    {nombre:"Sebas", apellido: "narvaez", edad: 22},
    {nombre:"Dario", apellido: "narvaez", edad: 23},
    {nombre:"Dario1", apellido: "narvaez", edad: 16},
    {nombre:"Dario2", apellido: "narvaez", edad: 15},
    {nombre:"Dario3", apellido: "narvaez", edad: 16},
    {nombre:"Dario4", apellido: "narvaez", edad: 29},
];

//metodo find, encontrar algo dentro de ese articulo
var encuentraArticulo = afiliados.find(function(articulo){
    return articulo.nombre === "Sebas"
});

C:\Users\ADM_FNARVAEZ\Documents\JAVASCRIPT\cursobasicoJavaScript



//metodo foreach, filtrado sin modificar
afiliados.forEach(function(afiliado){
    console.log(afiliado.nombre);
});

//some() devuelve verdadero o falso si el objeto cumple con esa validacion
var afiliadoMenores = afiliados.some(function(afiliado){
    return afiliado.edad <=18;
});

//push

    afiliados.push("Dario4",  "narvaez", 29);
