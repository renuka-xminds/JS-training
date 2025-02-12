let str = "Hello Hai How are you?";

// Removing all whitespaces from the string
let newStr = str.replaceAll(" ","");
console.log(newStr);

//Extracting the word 'hai' from the string
console.log(str.slice(6,9));

//string search
var hello = str.search("Hello");
if(hello != -1) {
    console.log("The word Hello in the sentence " + str);
}

let str1 = 'We are what we believe we are';

//find the occurrence of 'are' and 'xyz'
console.log(str1.match("are"));
console.log(str1.match("xyz"));

//Replace 'hello' with 'hai' in the sentence 'hello how are you?'
var replacedStr = str.replace("Hello","Hai");
console.log(replacedStr);

//Replace all the occurrence of 'we' with 'I am' in the sentence 'We are what we believe we are.';
var replaceAllStr = str1.replaceAll("We","I am");
console.log(replaceAllStr);