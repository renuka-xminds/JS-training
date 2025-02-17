const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}
//clone of the object user

let userClone = {...user}
console.log(userClone);

console.log(user === userClone);

console.log(typeof user);
console.log(typeof userClone);

//adding a new property to the object
let updatedUser = {...user, salary: 350000};
console.log(updatedUser);

//update the property
let updateAge = {...updatedUser, age:50};
console.log(updateAge);

//update nested object

const users = { 
    'names': 'Alex',
    'addresss': '15th Park Avenue',
    'ages': 43,
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

let updatedUsers = {
    ...users, 
    department: {
        ...user.department, numbers:7
    }
};
console.log(updatedUsers);

const user2 = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

// const department = {
//     'id': '001',
//     'Shift': 'Morning'
// }

const department = {
    'name': 'Sales',
    'Shift': 'Morning'
}        
/* The name property value of the user object is replaced by the name property value of the department object in the merged object output. So be careful of using it this way.
    As of now, you need to implement the deep-merge of objects by yourself or make use of a library like lodash to accomplish it. 
    {
        name: 'Sales',
        address: '15th Park Avenue',
        age: 43,
        Shift: 'Morning'
    }
*/

let combinedObj = {...user2, ...department};
console.log(combinedObj);

const user3 = { 
    'name3': 'Alex',
    'address3': '15th Park Avenue',
    'age3': 43
}

const {age3, ...rest} = user3;
console.log(age3, rest);