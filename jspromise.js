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



