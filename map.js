let m = new Map();
m.set('info',{'name' : 'Renuka', 'Age': '18'});
console.log(m);

m.set('age','25');
console.log(m);

for(let [key,values] of m) {
    console.log(key + ":"  + values);
}

m.forEach(function(values,key) {
    console.log(key + ":"  + values);
})

console.log(m.get('info').Age);
console.log(m.get('age'));

//Here we define the key as object
let book1 = { };
let book2 = { };
let book3 = { };

let bookStore = new Map();
bookStore.set(book1, { name: 'Don Quixote', availability: true });
bookStore.set(book2, { name: "Alice's Adventures in Wonderland", availability: false });
bookStore.set(book3, { name: 'The Adventures of Tom Sawyer', availability: true });

let avail = 0;
bookStore.forEach((values,key) => {
    console.log(`Book: ${values.name} , Availability: ${values.availability}`);
    if(values.name === 'Wonderland' && values.availability === true) {
        console.log(`The book "Wonderland" is available`);
    }
    if(values.availability == true) {
        avail = avail+1;
    }
});

//Total available books
console.log(`number of available books ${avail}`);
//Total numbers of books
console.log(bookStore.size);

//Remove book1 from bookStore
console.log(bookStore.delete(book1));




let bookStore1 = new Map();
bookStore1.set('Don Quixote',true );

console.log(bookStore1);


