let message: string = "Hello TypeScript";
console.log(message);

function add(a: number, b: number) {
  return a + b;
}

console.log(add(10, 20));

let username: string = "dhanraj";
let age: number = 25;
let isactive: boolean = true;

age = 26;
console.log(age);

let data: any = 10;

data = true;
console.log(data);

let value: unknown = "hello";

if (typeof value == "string") {
  console.log(value.toUpperCase());
}

type user = {
  name: string;
  age: number;
};

const User: user = {
  name: "Dhanraj",
  age: 25,
};

// for void and never
// | Feature        | `void`      | `never`         |
// | -------------- | ----------- | --------------- |
// | Returns value? | ❌ No        | ❌ Never returns |
// | Function ends? | ✅ Yes       | ❌ No            |
// | Example        | console.log | throw error     |

function sayHello(): void {
  console.log("hello");
}

sayHello();

function crash(): never {
  console.log("never"); //only this line giver error
  throw new Error("Crash!");
}

// crash();

type Shape = "circle" | "square";

function getArea(shape: Shape) {
  if (shape === "circle") return 1;
  if (shape === "square") return 2;
  const _exhaustiveCheck: never = shape; //  ensures all cases handled
}

function sum(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0);
}

console.log("sum:", sum([1, 2, 3, 4]));

function getEvenNumber(arr: number[]): number[] {
  return arr.filter((num) => num % 2 === 0);
}

console.log(getEvenNumber([1, 2, 3, 4]));
