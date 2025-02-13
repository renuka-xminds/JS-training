const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");

letters.add("c");

letters.add("c");

console.log(letters);

// List all Elements
let text = "";
for (const x of letters) {
  text += x;
}
console.log(text);

typeof letters;      // Returns object

letters instanceof Set;  // Returns true

// remove odd numbers
var numbers = new Set([12,14,15,17,18,19,20]);
for(var i of numbers) {
    if(i % 2 != 0) {
        numbers.delete(i);
    }
}
console.log(numbers);


// remove duplicates

const missedCalls=["Vishnu","Akhil","Aswin","Pooja","Vishnu","Ananthan","Jith","Jith","Pooja","Aswin"]
const newMissedCalls = new Set(missedCalls);
console.log(newMissedCalls);

const tags = new Set();
tags.add('Wordpress');
tags.add('joomla');
tags.add('Drupal');
tags.add('Laravel');
tags.add('Symfony');
tags.add('Codeignater');
tags.add('JAVA');

if(tags.has('JAVA')) {
    console.log('JAVA in the set');
    //if the tag exist remove it
    tags.delete('JAVA');
}

console.log(tags);

tags.forEach(element => {
    console.log(element);
    
});

const posts = new Set(['p1','p2','p3','p4',5,{
    name: "renuka",
    Gender: "Female"
}]);
console.log(posts);
for(var i of posts) {
    console.log(i);
}

posts.forEach(element => {
    console.log(element);
});


