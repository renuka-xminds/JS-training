const prompt=require('prompt-sync')();
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));

if((num1 > num2) && (num1 > num3)) {
    console.log(`number ${num1} is greatest number`);
} else if(num2 > num3) {
    console.log(`number ${num2} is greatest number`);
} else {
    console.log(`number ${num3} is greatest number`);
}


