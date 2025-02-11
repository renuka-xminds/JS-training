const prompt=require('prompt-sync')();
let num1 = parseFloat(prompt("Enter first number: "));
let num2 = parseFloat(prompt("Enter second number: "));
const operator = prompt("Enter the operator(+,-,*,/): ");

switch(operator) {
    case "+": 
        console.log(num1+num2);
        break;
    case "-":
        console.log(num1-num2);
        break;
    case "*":
        console.log(num1*num2);
        break;
    case "/":
        console.log(num1/num2);
        break;
    default:
        console.log("Given operator is invalid.");
}