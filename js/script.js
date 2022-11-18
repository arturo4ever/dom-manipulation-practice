/* console.log('Hello, World!');

const title = document.querySelector('h1');

console.log (title);

const parrafo = document.querySelectorAll('p');
const parrafito = document.getElementsByClassName('parrafito');
console.log(parrafito);

const pid = document.getElementById('pid');

console.log(pid);

const input = document.querySelector('input');

console.log(input); */

/* console.log({
    title,
    parrafito,
    parrafo,
    pid,
    input
}) */

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');

function clickButton() {
    let int1 = parseInt(input1.value);
    let int2 = parseInt(input2.value);
    console.log(int1);
    console.log(int2);
    /* return btn.append(toString(parseInt(input1)+ parseInt(input2))); */
    let obj = int1 + int2;
    console.log(obj);
    document.body.append(obj);
}

