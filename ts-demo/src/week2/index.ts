//------------------------------week2--------------------------------

function add2(a: number, b: number): number {
  return a + b;
}

console.log(add2(1, 2));

function greet(name: string = "guest", age?: number) {
  if (age) {
    return `hello ${name}, you age is: ${age}`;
  }
  return `heloo ${name}`;
}

// console.log(greet("dharaj", 22));

console.log(greet());

// arrow function
const add3 = (a: number, b: number): number => {
  return a + b;
};

console.log(add3(12, 12));

const square = (n: number): number => n * n;

const nums: number[] = [1, 2, 3];

const dobuled = nums.map((n: number) => n * 2);

console.log(dobuled);

const arrow_func = (name: string): string => {
  return name;
};

console.log(arrow_func("dharaj"));

let user: { name: string; age: number } = {
  name: "dhanraj",
  age: 22,
};

let sum = (user: { name: string; age: number }) => user.name + user.age;

console.log(sum(user));

let product: {
  name: string;
  price: number;
  details: { brand: string };
} = {
  name: "price",
  price: 20000,
  details: { brand: "samsung" },
};

console.log(product);

// extending interface
interface Person {
  name: string;
}

interface Employee extends Person {
  id: number;
}

const emp: Employee = {
  name: "Dhanraj",
  id: 101,
};

console.log(emp);

// ex:2

interface A {
  a: string;
}

interface B {
  b: number;
}

interface C extends A, B {
  c: boolean;
}

const D: C = {
  a: "dhanraj",
  b: 12,
  c: true,
};

console.log(D);

function calculateTotal(prices: number[]): number {
  return prices.reduce((a, b) => a + b, 0);
}

console.log(calculateTotal([10, 20]));

function search(keyword: string, page: number = 1): void {
  console.log(keyword, page);
}

console.log(search("dabhi", 23));

interface ApiResponse {
  success: boolean;
  data: string[];
}

const resp: ApiResponse = {
  success: true,
  data: ["dabhi", "dhanrajsinh"],
};

console.log(resp);

type Role = "admin" | "user";

interface User {
  name: string;
  role: Role;
}

const userr: User = {
  name: "dhanrajsinh",
  role: "admin",
};

console.log(userr);

// Create typed array utility functions
function getSum(arr: number[]): number {
  return arr.reduce((total, num) => total + num, 0);
}

console.log(getSum([10, 20, 30]));

function getMin(arr: number[]): number {
  return arr.reduce((total, num) => total + num, 0);
}

console.log(getMin([10, 10, 10]));

function getMax(arr: number[]): number {
  return Math.max(...arr);
}

console.log(getMax([10, 30, 20]));

function allPostive(arr: number[]): boolean {
  return arr.every((num) => num > 0);
}

console.log(allPostive([1, 2, -3]));

//1. Create utility functions with strict typing

function sortAsc(arr: number[]): number[] {
  return [...arr].sort((a, b) => a - b);
}

console.log(sortAsc([4, 3, 6, 1, 2, 5]));

function reverse(str: string): string {
  return str.split("").reverse().join("");
}

console.log(reverse("dhanrajsinh"));

function fullName(age: number = 1, fName: string, lName?: string) {
  if (lName) {
    return `Hello ${fName} ${lName}, and you age is: ${age}`;
  }
  return `Hello ${fName}, and you age is: ${age}`;
}

console.log(fullName(11, "dhanrajsinh"));

enum Color {
  red = "RED",
  green = "GREEN",
  blue = "BLUE",
}

let c: Color = Color.red;
console.log(c);

// Type: Intersections (&)
type user = {
  id: number;
};
type person = user & {
  name: string;
};

const p: person = {
  id: 1,
  name: "dhanrajsinh",
};
console.log(p);

// Unions and Primitives (Unique to Type)
type status = "success" | "error" | "pending";

type name = string;

type data = [name, status];

let person_data: data = ["dhanrajsinh", "success"];

console.log(person_data);

// 2.Create function with optional filters

function filterData(data: string[], filter?: string): string[] {
  if (filter) {
    console.log("filter matched");
    return data.filter((item) => item.includes(filter));
  }
  return data;
}

console.log(filterData(["apple", "banana", "grape"], "ape"));

// typed arrow function

// simple arrow function
let add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(10, 20));

// Type Inference
const multiply = (a: number, b: number) => a * b;
console.log(multiply(5, 7));

// arrowed function with no parameters
const greeting = (): string => {
  return "hello";
};
console.log(greeting());

// arrow function with optional parameters
const greetUSer = (name?: string): string => {
  return name ? `Hello, ${name}!` : "Hello, guest!";
};

console.log(greetUSer("dabhi"));

// arrowed function with Default Parameters
const greetUSerWIthDefault = (nanme: string = "guest"): string => {
  return `Hello, ${nanme}!`;
};
console.log(greetUSerWIthDefault("abc"));

// arrow function with Function Type Declaration

type AddFunction = (a: number, b: number) => number;

const addNum: AddFunction = (a, b) => a + b;
console.log(addNum(7, 10));

// 7. Arrow Function with Object Parameter
type USer = {
  name: string;
  age: number;
};

const getUSerInfo = (user: USer): string => {
  return `Name: ${user.name}, Age: ${user.age}`;
};
console.log(getUSerInfo({ name: "dhanrajsinh", age: 11 }));

// Arrow Function in Array Methods
const numbers: number[] = [1, 2, 3, 4, 5];
const doubled = numbers.map((num: number): number => num * 2);
console.log(doubled);

// Refactor JS functions to TS
type USEr = {
  name: string;
  age: number;
};

const getUser = (user: USEr): string => {
  return `${user.name} - ${user.age}`;
};

// Create typed user object
type uID = {
  id: number;
};
type USErr = uID & {
  name: string;
  age: number;
};

const user1: USErr = {
  id: 1,
  name: "dhanrajsinh",
  age: 11,
};
console.log(user1);

// interface
interface IUser {
  id: number;
  name: string;
  age: number;
}

const user2: IUser = {
  id: 2,
  name: "dhanrajsinh",
  age: 22,
};
console.log(user2);

interface P1 {
  id: number;
  name: string;
  greetingg(): void;
}

let p1: P1 = {
  id: 1,
  name: "dhanrajsinh",
  greetingg() {
    console.log("hello");
  },
};
p1.greetingg();

//5. Create interface for API response

interface ApiResponsee {
  success: boolean;
  message: string;
  data: string[];
}
const apiRes: ApiResponsee = {
  success: true,
  message: "Data fetched successfully",
  data: ["item1", "item2", "item3"],
};
console.log(apiRes);

import type { BaseEntity } from "./baseEntity";

interface USER extends BaseEntity {
  name: string;
  email: string;
}

const u2: USER = {
  id: 1,
  name: "dhanrajsinh",
  email: "dabhi123@gmail.com",
  createdAt: new Date(),
  updatedAt: new Date(),
};

console.log(u2);
