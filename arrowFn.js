const prompt=require('prompt-sync')();

let checkPrime = (num) => {
    if(num != 1) {
        let i = 2;
        while(i < num-1) { 
            if(num % i == 0) {
                console.log(`${num} is not a prime number`);
                break;
            }
            i++
        }
        console.log(`${num} is a prime number`);
    }
}
let num = parseFloat(prompt("Enter number: "));
checkPrime(num);