const obj = {
    'firstname': 'Renuka',
    'secondname': 'Devi',
    get fullname () {
        return this.firstname + " "+ this.secondname
    },
    get getFirstName () {
        return this.firstname;
    },
    set setFirstName(name) {
        return this.firstname = name;
    }
}
console.log(obj.fullname);
console.log(obj.getFirstName);
console.log(obj.firstname);
obj.setFirstName = 'Akhil';
console.log(obj.firstname);

Object.defineProperty(
    obj, 
    "getSecondName", 
    {
        get: function() 
        {
            return this.secondname;
        }
    }
);

console.log(obj.getSecondName);

const obj1 =  {
    'rollno' : 12,
    'course' : 'Networking',
    'duration': '60 hrs',
    'start_date' : '12-06-2024',
    'end_date' : '25-08-2024',
    'grade' : 'A',
    get getGrade() {
        return this.grade;
    },
    set setgrade(value) {
        this.grade = value;
    },
    set setRollNo(value) {
        this.rollno = value;
    },
    set setCourse(value) {
        this.course = value;
    },
    set setDuration(value) {
        this.duration = value;
    }
};

console.log(`Roll number: ${obj1.rollno}, Course: ${obj1.course}, Duration: ${obj1.duration}, Start Date: ${obj1.start_date}, End Date: ${obj1.end_date}, Grade: ${obj1.grade}`);

//set grade
obj1.setgrade = 'A+';
console.log(`Grade : ${obj1.getGrade}`);

obj1.setRollNo = 10;
obj1.setCourse = 'Java';
obj1.duration = '70hrs'
console.log(`Roll number: ${obj1.rollno}, Course: ${obj1.course}, Duration: ${obj1.duration}, Start Date: ${obj1.start_date}, End Date: ${obj1.end_date}, Grade: ${obj1.grade}`);

Object.defineProperty(
    obj1,
    "setStartDate", 
    {
        set: function(value) {
            this.start_date = value;
        }
    }
);

obj1.setStartDate = "15/08/2024";

console.log(obj1.start_date);

//obect methods

const a = {'name': 'Renuka', 'age': '25','gender' : 'F'};
const b = {'name': 'Renjith', 'age': '27'};

console.log(Object.assign(a,b));

console.log(Object.entries(a));
objArr = Object.entries(a);
objArr.forEach((value,key) => {
    console.log(key +" "+ value);
});


const transactions = [
    { id: 1, amount: 100, date: "2024-02-12" },
    { id: 2, amount: 200, date: "2024-02-13" },
    { id: 3, amount: 150, date: "2024-02-12" },
    { id: 4, amount: 300, date: "2024-02-14" },
    { id: 5, amount: 250, date: "2024-02-13" }
  ];

  // Callback function to Group Elements
function myCallback(transaction) {
    return transaction.date;
  }

  const result = Object.groupBy(transactions, myCallback);
  console.log(result);

//Iterate the object and print the property and its value

  const person={
    Name: "johny",
    Age: 40,
    Cars:[
           { 
             name:"ford",
             models:["mustang","Fiest","Mustang"]
           },
           { 
                name:"BMW",
                models:[320,'x3','x5']
            },
             { 
                 Name:"fiat",
                 models:[500,"panda"]
             }
          ]
}

const personArr = Object.entries(person);
console.log(personArr.length);
for(let [k,v] of personArr) {
    console.log(k + " " + v);

}

//Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one?

let obj2 = {
    name: "John",
    age: 23,
    degree: "CS"
}
let obj3 = {
    name: "John",
    age: 23,
    degree: "CS"
    }

const obj2Keys = Object.keys(obj2);
const obj3Keys = Object.keys(obj3);


if(obj2Keys != obj3Keys) {
    console.log("objects are not same length");
}

for (const key of obj2Keys) {
    const val1 = obj2[key];
    const val2 = obj3[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      areObjects && !deepEqual(val1, val2) ||
      !areObjects && val1 !== val2
    ) {
        console.log("objects are not equal");
    }
  }

  console.log("objects are equal");

  function isObject(object) {
    return object != null && typeof object === 'object';
  }