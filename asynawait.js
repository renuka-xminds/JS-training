const products = [
    { id: 1, name: 'Laptop', price: 27000 },
    { id: 2, name: 'Smart Phone', price: 15000 },
    { id: 3, name: 'Tablet', price: 30000 }
  ];

  function calculateTotalPrice(product) {
    return new Promise(function (resolve,reject) {
        if(product.length == 0) {
            reject('No Product Found');
        }
        const totalPrice = product.reduce((accumulator ,item) => {
            return accumulator += item.price;
          }, 0);
          console.log(totalPrice);
          if(totalPrice) {
            resolve(`The total price is ${totalPrice}`);
          }
    });
  }

  async function getTotalPrice() {
    try {
        const res = await calculateTotalPrice(products);
        console.log(res);
        
    } catch(error) {
      console.log(error);
    }
  }

  getTotalPrice();


  const users = [
    { id: 1, username: 'Alice', role: 'admin' },
    { id: 2, username: 'Bob', role: 'user' },
    { id: 3, username: 'Charlie', role: 'editor' }
  ];

  function getUsers() {
    var getUser = new Promise((res,rej) => {
      if(users.length == 0) {
        rej(`no users in the list`);
      }
      res(users);
    });
    return getUser;

  }

  function adminsCount() {
    return new Promise(function (resolve, reject) {
      var count = 0;
      if(users.filter(val => { if(val.role == "admin") {count += 1;} } )) {
          resolve(`${count} admin in userlist`);
      }
  });
  }

  async function handleUserAsync() {
    try {
      console.log(await getUsers());
      console.log(await adminsCount());
    } catch(error) {
      console.log(error);
    }

  }

  handleUserAsync();

  const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3"
];

async function fetchAllUrls() {
    try {
        const fetchPromises = urls.map(async (url) => {
            console.log(`Fetching: ${url}`);
            const response = await fetch(url);
            return response.json();
        });

        const results = await Promise.all(fetchPromises);
        console.log('Results:', results);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchAllUrls();