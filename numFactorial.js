const prompt=require('prompt-sync')();
var num = parseFloat(prompt("Enter number: "));
var factorial = 1;
var factorials = (num) => {
    if(num != 0) {
        factorial = factorial * num;
        num -= 1;
        factorials(num);
    }
}   
factorials(num);
console.log(`${factorial}`);
