"use strict";
//------------------------------week2--------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
function add2(a, b) {
    return a + b;
}
console.log(add2(1, 2));
function greet(name = "guest", age) {
    if (age) {
        return `hello ${name}, you age is: ${age}`;
    }
    return `heloo ${name}`;
}
// console.log(greet("dharaj", 22));
console.log(greet());
// arrow function
const add3 = (a, b) => {
    return a + b;
};
console.log(add3(12, 12));
const square = (n) => n * n;
const nums = [1, 2, 3];
const dobuled = nums.map((n) => n * 2);
console.log(dobuled);
const arrow_func = (name) => {
    return name;
};
console.log(arrow_func("dharaj"));
let user = {
    name: "dhanraj",
    age: 22,
};
let sum = (user) => user.name + user.age;
console.log(sum(user));
let product = {
    name: "price",
    price: 20000,
    details: { brand: "samsung" },
};
console.log(product);
const emp = {
    name: "Dhanraj",
    id: 101,
};
console.log(emp);
const D = {
    a: "dhanraj",
    b: 12,
    c: true,
};
console.log(D);
function calculateTotal(prices) {
    return prices.reduce((a, b) => a + b, 0);
}
console.log(calculateTotal([10, 20]));
function search(keyword, page = 1) {
    console.log(keyword, page);
}
console.log(search("dabhi", 23));
const resp = {
    success: true,
    data: ["dabhi", "dhanrajsinh"],
};
console.log(resp);
const userr = {
    name: "dhanrajsinh",
    role: "admin",
};
console.log(userr);
// Create typed array utility functions
function getSum(arr) {
    return arr.reduce((total, num) => total + num, 0);
}
console.log(getSum([10, 20, 30]));
function getMin(arr) {
    return arr.reduce((total, num) => total + num, 0);
}
console.log(getMin([10, 10, 10]));
function getMax(arr) {
    return Math.max(...arr);
}
console.log(getMax([10, 30, 20]));
function allPostive(arr) {
    return arr.every((num) => num > 0);
}
console.log(allPostive([1, 2, -3]));
//1. Create utility functions with strict typing
function sortAsc(arr) {
    return [...arr].sort((a, b) => a - b);
}
console.log(sortAsc([4, 3, 6, 1, 2, 5]));
function reverse(str) {
    return str.split("").reverse().join("");
}
console.log(reverse("dhanrajsinh"));
function fullName(age = 1, fName, lName) {
    if (lName) {
        return `Hello ${fName} ${lName}, and you age is: ${age}`;
    }
    return `Hello ${fName}, and you age is: ${age}`;
}
console.log(fullName(11, "dhanrajsinh"));
var Color;
(function (Color) {
    Color["red"] = "RED";
    Color["green"] = "GREEN";
    Color["blue"] = "BLUE";
})(Color || (Color = {}));
let c = Color.red;
console.log(c);
const p = {
    id: 1,
    name: "dhanrajsinh",
};
console.log(p);
let person_data = ["dhanrajsinh", "success"];
console.log(person_data);
// 2.Create function with optional filters
function filterData(data, filter) {
    if (filter) {
        console.log("filter matched");
        return data.filter((item) => item.includes(filter));
    }
    return data;
}
console.log(filterData(["apple", "banana", "grape"], "ape"));
// typed arrow function
// simple arrow function
let add = (a, b) => {
    return a + b;
};
console.log(add(10, 20));
// Type Inference
const multiply = (a, b) => a * b;
console.log(multiply(5, 7));
// arrowed function with no parameters
const greeting = () => {
    return "hello";
};
console.log(greeting());
// arrow function with optional parameters
const greetUSer = (name) => {
    return name ? `Hello, ${name}!` : "Hello, guest!";
};
console.log(greetUSer("dabhi"));
// arrowed function with Default Parameters
const greetUSerWIthDefault = (nanme = "guest") => {
    return `Hello, ${nanme}!`;
};
console.log(greetUSerWIthDefault("abc"));
const addNum = (a, b) => a + b;
console.log(addNum(7, 10));
const getUSerInfo = (user) => {
    return `Name: ${user.name}, Age: ${user.age}`;
};
console.log(getUSerInfo({ name: "dhanrajsinh", age: 11 }));
// Arrow Function in Array Methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);
const getUser = (user) => {
    return `${user.name} - ${user.age}`;
};
const user1 = {
    id: 1,
    name: "dhanrajsinh",
    age: 11,
};
console.log(user1);
const user2 = {
    id: 2,
    name: "dhanrajsinh",
    age: 22,
};
console.log(user2);
let p1 = {
    id: 1,
    name: "dhanrajsinh",
    greetingg() {
        console.log("hello");
    },
};
p1.greetingg();
const apiRes = {
    success: true,
    message: "Data fetched successfully",
    data: ["item1", "item2", "item3"],
};
console.log(apiRes);
const u2 = {
    id: 1,
    name: "dhanrajsinh",
    email: "dabhi123@gmail.com",
    createdAt: new Date(),
    updatedAt: new Date(),
};
console.log(u2);
//# sourceMappingURL=index.js.map