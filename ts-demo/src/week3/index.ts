import type TrueLiteral = require("typescript");
import ts = require("typescript");

// Type Alias
//1. Object Type Alias
type User = {
  name: string;
  isActive: boolean;
};

const user: User = {
  name: "jogn wick",
  isActive: true,
};

// console.log(user);

// 2.Function Type Alias
type AddFunction = (a: number, b: number) => number;

const add: AddFunction = (a, b) => a + b;
// console.log(add(2, 3));

// 3. Union Types
type Status = "success" | "error" | "loading";

let apiSatus: Status;
apiSatus = "error";
console.log(apiSatus);

// 4: Complex Types
type Product = {
  id: number;
  name: string;
};
type order = {
  orderId: number;
  product: Product;
};

const myOrder: order = {
  orderId: 123,
  product: {
    id: 1,
    name: "Laptop",
  },
};
// console.log(myOrder);

// Optional + Readonly
type Employee = {
  readonly id: number;
  name: string;
  department?: string;
};

const employee: Employee = {
  id: 1,
  name: "Alice",
};
// employee.id = 2;
// console.log(employee);

// Create API status union type
type ApiResposne<T> = {
  success: boolean;
  data: T;
  message: string;
  status: Status;
};

type USer = {
  id: number;
  name: string;
};

const resp: ApiResposne<USer> = {
  success: true,
  data: {
    id: 1,
    name: "trump",
  },
  message: "data fetch successfully",
  status: "success",
};
// console.log(resp);

// Intersection Types
// Create combined user profile type
type Emp = {
  id: number;
};

type Person = {
  name: string;
};
type Staff = Emp & Person;
const Staff1: Staff = {
  id: 1,
  name: "john wick",
};
// console.log(Staff1);

// Create status-based API response
type SuccessResponse<T> = {
  status: "success";
  data: T;
  message: string;
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type APIResponse<T> = SuccessResponse<T> | ErrorResponse;

const res1: APIResponse<USer> = {
  status: "success",
  data: {
    id: 1,
    name: "john wick",
  },
  message: "data fetch successfully",
};

const res2: APIResponse<USer> = {
  status: "error",
  message: "data not fetched ",
};

// console.log(res1, "\n", res2);

// generics
function genereicFunction<T>(arg: T): T {
  return arg;
}
// console.log(genereicFunction<number>(10));

//  Multiple Generic Types
function multipleGenericTypes<K, V>(key: K, value: V) {
  return [key, value];
}

// console.log(multipleGenericTypes<string, number>("age", 11));

// Generics with Interfaces
interface ApiRES<T> {
  success: boolean;
  data: T;
}

const res: ApiRES<string> = {
  success: true,
  data: "data",
};

// console.log(res);

// Generics with Classes
class Box<T> {
  content: T;
  constructor(value: T) {
    this.content = value;
  }
}

const numberBox = new Box<number>(100);
const stringBox = new Box<string>("hello");

// console.log(numberBox, "\n", stringBox);

// Create reusable API response wrapper
// Build generic array utility
interface APIRES<T> {
  status: Status;
  data?: T;
  message: string;
}
function fetchData<T>(data: T): APIRES<T> {
  return {
    status: "success",
    data: data,
    message: "data fetched succusfully",
  };
}
// console.log(fetchData(["item1", "item2", "item3"]));

// Create generic pagination interface
interface PaginationResposne<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
interface USEr {
  id: number;
  name: string;
}

const userRes: PaginationResposne<USEr> = {
  data: [
    { id: 1, name: "trump" },
    { id: 2, name: "putin" },
  ],
  total: 50,
  page: 1,
  limit: 10,
};
console.log(userRes);
