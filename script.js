
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const pResult = document.querySelector('#result');
const btn = document.querySelector('#btnCalcular');

// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event) {
//     console.log(event);
//     event.preventDefault();
//     pResult.innerText = `Resultado: ${Number(input1.value) + Number(input2.value)}`;
// }

btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {
    // console.log(event);
    // event.preventDefault();
    pResult.innerText = `Resultado: ${Number(input1.value) + Number(input2.value)}`;
}
