//Datatype in Javascript are divided into two different categories.

//1. Primitive Data Types (immutable)
//2. Non-Primitive Data Types (mutable)

//immutable
let a = 10;
a+10;
console.log(a);

//mutable
let obj = {

    "name": "fagun",
    "id": 1234
}

obj.name = "Bharat" ;
console.log(obj);

/*******************************************************/
/**************Primitive Datatypes*********************/
/*****************************************************/

// - number
// - string
// - boolean
// - Undefined
// - null
// - symbol

// - number => The data type that can store numbers with decimals or without decimals, that too without any quotations
let num1 = 10;
let num2 = 10.5;
console.log(typeof num1);
console.log(typeof num2);

// - string => The Datatype that can store a collection of characters within the quotations (single or double or backticks)

let employeeName = "fa'g'un";
let location = 'che"n"nai';
let company = `luminar`;

console.log(typeof employeeName);
console.log(typeof location);
console.log(typeof company);

console.log(employeeName);
console.log(location);
console.log(company);

console.log("Employee name is "+employeeName+" and employee location is "+location)
console.log(`Employee name is ${employeeName} and employee location is ${location}`)

// - boolean => The Datatype to store the result of the condition in the form of true or false
let x = 10;
let y = 20;
let z = x > y ; //z will store the data in the form of boolean
console.log(typeof z);
console.log(z);

//undefined => Undefined represents a variable that has been declared but not assigned any value.
let age;
console.log(age);

//null => Null represents a variable that has been declared and assigned a null value or empty value.

let salary = 100000;
console.log(salary);

salary = null;
console.log(salary);

/*******************************************************/
/**********Non-Primitive Datatypes*********************/
/*****************************************************/

// -object => Object data type represents a collection of key-value pairs within the curly braces.
let person = {
    "name": "fagun",
    "age": 35,
    "empId": 1234,
    "visa": true,
    "address": {
        "city": "hyderabad",
        "state": "telangana"
    }
}

//access data
console.log(person.name);
console.log(person.address.city);

console.log(person["name"]);
console.log(person.address["city"]);

console.log(person);

// -array => Array represents a list of values.

let fruits = ["apple","mango","grapes"];
let prices = [100,200,300];
let fruitsAndPrices = ["apple",100,"mango",80,"grapes",160];

//access data
console.log(fruits[1]);
console.log(fruitsAndPrices[2]);

//-function => Function data type represents a block of code or collection of statements written together to complete a specific task.
