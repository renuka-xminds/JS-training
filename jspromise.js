/* Define a promise that will return a resolve object of total price of products from a product array
 and reject object with message no product foind if the product array is empty */

const products = [
    { id: 1, name: 'Laptop', price: 27000 },
    { id: 2, name: 'Smart Phone', price: 15000 },
    { id: 3, name: 'Tablet', price: 30000 }
  ];

  const product = new Promise(function (resolve,reject) {
    const totalPrice = products.reduce((accumulator ,item) => {
        return accumulator += item.price;
      }, 0);
      console.log(totalPrice);
      if(products.length === 0) {
        reject("no product found");
      }

      if(totalPrice) {
        resolve(`The total price is ${totalPrice}`);
      }
  });

  // executes when promise is resolved successfully

  product.then(function successValue(result) {
    console.log(result);
},)
// executes if there is an error
.catch(function errorValue(result) {
    console.log(result);
});


/* Define 2 promises to fetch the user details from the array and 
second promise to find the count of users having role admin.Using promise chain print the output */

const users = [
    { id: 1, username: 'Alice', role: 'admin' },
    { id: 2, username: 'Bob', role: 'user' },
    { id: 3, username: 'Charlie', role: 'editor' }
  ];

  const fetchUsers = new Promise(function (resolve, reject) {
    if(users.length === 0) {
        reject("users array is empty");
    }
    resolve(users);
  });

  fetchUsers.then(function successVal(result) {
    
    fetchAdmins = new Promise(function (resolve, reject) {
        var count = 0;
        if(result.filter(val => { if(val.role == "admin") {count += 1;} } )) {
            resolve(`${count} admin in userlist`);
        }
    }).then((result => console.log(result)));
  }).catch(function errorVal(result) {
    console.log(result);
  });

  /* fetch all details from the url and print the result.
Use Promise all ,fetch method to fetch details from a specific url,array map method to iterate and fetch the details */

const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3"
  ];

  
  const fetchUrl = 
        urls.map( (vals) => {
            console.log(vals);
            return fetch(vals)
            .then(response => response.json())
            .catch(error => console.error('Error:', error));
        });
        

  Promise.all(fetchUrl).then((resultVal) => console.log(resultVal))
  .catch((resultVal) => console.log(resultVal));

//cart items
  var items = [
    {id:1, name: "night lamb", price: 200},
    {id:2, name: "cycle", price: 20000},
    {id:3, name: "T-shirt", price: 2000},
    {id:4, name: "Jeans", price: 2000}
  ];

var cartItems = new Promise((resolve,reject) => {
    if(items.length != 0) {
        resolve(items);
    }
    reject(`empty cart`);
}).then(val => {
    var placeOrder = new Promise((resolve,reject) => {
       var totalPrice =  val.reduce((a,i) => {
            a+= i.price;
        },0);

        if(totalPrice != 0) {
            resolve(totalPrice);
        }

    }).then(val => console.log("Payment Succesfull"));
}).catch(val => console.log(val));
  

