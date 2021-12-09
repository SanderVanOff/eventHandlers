'use strict'

const btn = document.querySelector('#btn');
const input = document.getElementById('text');
const square = document.getElementById('square');
const circle = document.getElementById('circle');
const e_btn = document.getElementById('e_btn');
const range = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');

let currentColor = null;


e_btn.style.display = "none";
rangeSpan.textContent = '50%';


range.addEventListener('input', (event) => {
    rangeSpan.textContent = `${event.target.value}%`;
    circle.style.width = `${event.target.value}%`;
    circle.style.height = `${event.target.value}%`;
});


input.addEventListener('change', (event) => {
    currentColor = event.target.value;
});

btn.addEventListener('click', () => {
    if(input.value) {
        square.style.backgroundColor = currentColor;
        input.value = '';
    }
    
});