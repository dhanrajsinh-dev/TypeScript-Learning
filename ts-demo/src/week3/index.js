"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const user = {
    name: "jogn wick",
    isActive: true,
};
const add = (a, b) => a + b;
let apiSatus;
apiSatus = "error";
console.log(apiSatus);
const myOrder = {
    orderId: 123,
    product: {
        id: 1,
        name: "Laptop",
    },
};
const employee = {
    id: 1,
    name: "Alice",
};
const resp = {
    success: true,
    data: {
        id: 1,
        name: "trump",
    },
    message: "data fetch successfully",
    status: "success",
};
const Staff1 = {
    id: 1,
    name: "john wick",
};
const res1 = {
    status: "success",
    data: {
        id: 1,
        name: "john wick",
    },
    message: "data fetch successfully",
};
const res2 = {
    status: "error",
    message: "data not fetched ",
};
// console.log(res1, "\n", res2);
// generics
function genereicFunction(arg) {
    return arg;
}
// console.log(genereicFunction<number>(10));
//  Multiple Generic Types
function multipleGenericTypes(key, value) {
    return [key, value];
}
const res = {
    success: true,
    data: "data",
};
// console.log(res);
// Generics with Classes
class Box {
    content;
    constructor(value) {
        this.content = value;
    }
}
const numberBox = new Box(100);
const stringBox = new Box("hello");
function fetchData(data) {
    return {
        status: "success",
        data: data,
        message: "data fetched succusfully",
    };
}
const userRes = {
    data: [
        { id: 1, name: "trump" },
        { id: 2, name: "putin" },
    ],
    total: 50,
    page: 1,
    limit: 10,
};
console.log(userRes);
//# sourceMappingURL=index.js.map