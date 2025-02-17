let student = {
    'name': 'Renuka',
    'standard': 6,
    'Mark': 100
};

console.log(student.name);

let {name} = student;

console.log(name);

let {Mark} = student;
console.log(Mark);

//assigining new property in the object
let {age = 10} = student;

console.log(student);
console.log(age);

//alias for properties
let {standard: standards} = student;

console.log(standards);

// Nested object destructuring
const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43,
    'department':{
        'name': 'Sales',
        'Shift': 'Morning',
        'address': {
            'city': 'Bangalore',
            'street': '7th Residency Rd',
            'zip': 560001
        }
    }
}

let {department} = user;

console.log(department);

let{department: {address}} = user;

console.log(address);

let {department: {address: {street}}} = user;

console.log(street);

//Destructure in loop
const users = [
    { 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    },
    { 
        'name': 'Bob',
        'address': 'Canada',
        'age': 53
    },
    { 
        'name': 'Carl',
        'address': 'Bangalore',
        'age': 26
    }
];

for(let {name,address,age} of users) {
    console.log(`name: ${name}, address: ${address}, age: ${age}`);
}

//  Print the object property and values with object destructuring
const users1 = [
    { id: 1, names: 'Nithya', ages: 25 },
    { id: 2, names: 'Soumya', ages: 30 },
    { id: 3, names: 'Shari', ages: 20 }
  ];

for(let {id,names,ages} of users1) {
    console.log(`id: ${id}, name: ${names}, ages: ${ages}`);
}

//Add property salary to this object 
const employee = { id: 1, namess: 'Nithya', agess: 25 };

const updatedEmp = {...employee, salary:56000};

console.log(updatedEmp);
let {salary} = updatedEmp;
console.log(salary);

//nested object destructure
const user2 = {
    id: 101,
    name: "Alice",
    addresses: {
      streets: "123 Main St",
      city: "Wonderland",
      coordinates: {
        lat: 40.7128,
        lng: -74.0060
      }
    }
  };

  let {addresses} = user2
  console.log(addresses);
  let {addresses:{streets}} = user2;
  console.log(streets);
  let {addresses:{coordinates}} = user2;
  console.log(coordinates);
  let {addresses:{coordinates:{lat}}} = user2;
   console.log(lat);




