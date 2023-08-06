const buttons = document.querySelectorAll('button');
var display = document.getElementById("display");

let calculation =["0"];
let AccCalculation = [];

for (var i=0 ; i < buttons.length ; i++){
    buttons[i].addEventListener('click',
    function calculate(){
        const value = this.getAttribute('data-value');
        if (value === "AC") {
            calculation = [];
            display.textContent = "0";
            console.log(value);
        }
        else if (value === "=") {
            display.textContent = eval(AccCalculation);
            console.log(value);
        }
        else if (value === "DEL") {
            calculation.pop();
            AccCalculation = calculation.join('');
            display.textContent = eval(AccCalculation);
            console.log(value);
        }
        else{
            calculation.push(value);
            AccCalculation = calculation.join('');
            display.textContent = AccCalculation;
            console.log(value);
        }
    })
}

