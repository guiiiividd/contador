const counter = document.getElementById('counter-value')
const resetButton = document.getElementById('reset-button')
const incrementButton = document.getElementById('increment-button')
const decrementButton = document.getElementById('decrement-button')

counter.innerText = localStorage.getItem("value");

resetButton.addEventListener('click', ()=>{
    localStorage.setItem("value", 0);
    counter.innerText = localStorage.getItem("value");
})

incrementButton.addEventListener('click', ()=>{
    localStorage.setItem("value", parseInt(localStorage.getItem("value")) + 1);
    counter.innerText = localStorage.getItem("value");
})

decrementButton.addEventListener('click', ()=>{
    localStorage.setItem("value", parseInt(localStorage.getItem("value")) - 1);
    counter.innerText = localStorage.getItem("value");
})