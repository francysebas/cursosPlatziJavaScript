var afiliados = [
    {nombre:"francy", apellido: "narvaez", edad: 20},
    {nombre:"Diego", apellido: "narvaez", edad: 21},
    {nombre:"Sebas", apellido: "narvaez", edad: 22},
    {nombre:"Dario", apellido: "narvaez", edad: 23},
    {nombre:"Dario1", apellido: "narvaez", edad: 23},
    {nombre:"Dario2", apellido: "narvaez", edad: 25},
    {nombre:"Dario3", apellido: "narvaez", edad: 26},
    {nombre:"Dario4", apellido: "narvaez", edad: 29},
];
// metodo de filtrar llamar a la variables de arrelgos afiliadoFiltrado
var afiliadoFiltrado = afiliados.filter(function(afiliado){
    return afiliado.edad <=22
});


// metodo para mapear el arrelaglo por filtro de nombre
var afiliadonombre = afiliados.map(function(afiliado){
    return afiliado.nombre
});



