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
const parrafito = document.getElementsByClassName('.parrafito');
//seleccionar  id
const pid = document.getElementById('#pid');

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

h1.innerText = 'cambio... <br> desde javaScript...';

console.log(h1.getAttribute('class'));