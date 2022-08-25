const h1 = document.querySelector('h1');
//const input1 = document.querySelector('#calculo1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo')
const input2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#resultado')

//escuchar eventos de boton desde js - no se coloca directamente en el html submit u onclick
//btnCalcular.addEventListener('click', btnOnClick);
form.addEventListener('submit',sumarNumeros);

function sumarNumeros(event){
    // console.log({event});
    event.preventDefault();
    
    //console.log(input1.value + input2.value);
    const sumaInput = input1.value + input2.value;
    pResultado.innerText="Resultado: " + sumaInput;
}

