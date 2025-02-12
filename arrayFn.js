const numbers = [1,2,3,4,5];
//array looping
for(let i=0; i<numbers.length; i++) {
    console.log(numbers[i]);
}

//length of the array
console.log(numbers.length);

//add an item to the front and end of the array

numbers.pop();
numbers.unshift(0);

console.log(numbers);

numbers.shift();
numbers.push(6);

console.log(numbers);
