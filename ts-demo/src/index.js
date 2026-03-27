"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let message = "Hello TypeScript";
console.log(message);
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
let username = "dhanraj";
let age = 25;
let isactive = true;
age = 26;
console.log(age);
let data = 10;
data = true;
console.log(data);
let value = "hello";
if (typeof value == "string") {
    console.log(value.toUpperCase());
}
const User = {
    name: "Dhanraj",
    age: 25,
};
// for void and never
// | Feature        | `void`      | `never`         |
// | -------------- | ----------- | --------------- |
// | Returns value? | ❌ No        | ❌ Never returns |
// | Function ends? | ✅ Yes       | ❌ No            |
// | Example        | console.log | throw error     |
function sayHello() {
    console.log("hello");
}
sayHello();
function crash() {
    console.log("never"); //only this line giver error
    throw new Error("Crash!");
}
function getArea(shape) {
    if (shape === "circle")
        return 1;
    if (shape === "square")
        return 2;
    const _exhaustiveCheck = shape; //  ensures all cases handled
}
function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
console.log("sum:", sum([1, 2, 3, 4]));
function getEvenNumber(arr) {
    return arr.filter((num) => num % 2 === 0);
}
console.log(getEvenNumber([1, 2, 3, 4]));
//# sourceMappingURL=index.js.map