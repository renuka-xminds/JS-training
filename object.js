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


