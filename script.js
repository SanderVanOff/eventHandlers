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


range.addEventListener('input', (event) => {
    console.log(event.target.value)
    rangeSpan.textContent = event.target.value;
})


input.addEventListener('change', (event) => {
    currentColor = event.target.value;
});

btn.addEventListener('click', () => {
    square.style.backgroundColor = currentColor;
});