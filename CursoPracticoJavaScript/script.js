//h1 {color:red}
//.parrafito{...}
//#pid {...}
//variables que representen los selectores

console.log('hola mundo cruel....')

//seleccionar etiquetas
const h1=document.querySelector('h1');
const p = document.querySelector('p');
const input = document.querySelector('input');
//seleccionar la clase
const parrafito = document.getElementsByClassName('parrafito');
//seleccionar  id
const pid = document.getElementById('pid');

console.log(input.value);

console.log({
    h1,
    p,
    input,
    parrafito,
    pid,
});

//manejo del html desde javaCript
//h1.innerHTML = 'cambio... <br> desde javaScript...';

console.log(h1.getAttribute('class'));

//modifica los atributos de la clase
h1.setAttribute('class', 'azul');

//Adicionar per con clases, tambien se puede el remove
h1.classList.add('rojo');

//toggle  contains

//cambiar un input desde js
input.value = "Digita un nombre"

//crear un elemento desde cero
// console.log(document.createElement('img'));
// console.log(document.createElement('span'));

const img = document.createElement('img');
img.setAttribute('src','https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/05/avatar-2-disney.jpg?fit=2500%2C1406&quality=50&strip=all&ssl=1');
console.log(img);

// pid.innerHTML= "";
pid.append(img);