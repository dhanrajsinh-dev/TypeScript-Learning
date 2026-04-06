// Create typed API fetch function

import { getUser } from "./api/userService";

async function fetchData<T>(url:string):Promise<T>{
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: T = await response.json();
    return data;
}

 
// fetchData<{name: string}>('https://jsonplaceholder.typicode.com/todos/1').then(data => {
//     console.log(data);
// })



// Create API service layer
// import {
//   getUsers,
//   getUser,
//   createUser,
//   updateUser,
//   deleteUser,
// } from "./api/userService.js";

// async function main() {
//   try {
//     const users = await getUsers();
//     console.log("Users:", users);

//     const user = await getUser(1);
//     console.log("Single User:", user);

//     const newUser = await createUser({
//       name: "Dhanraj",
//       email: "dhanraj@test.com",
//     });
//     console.log("Created:", newUser);

//     const updated = await updateUser(1, {
//       name: "Updated Name",
//     });
//     console.log("Updated:", updated);

//     await deleteUser(1);
//     console.log("Deleted user");
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// main();

// custom error class
class validationError extends Error {
  constructor(message:string) { 
    super(message);
    this.name="validationError";
  }

}

function registerUser(age:number) 
{
  if(age < 18) {
    throw new validationError("User must be at least 18 years old");
  }
  return "user registerd successfully";
}

try{
  registerUser(16);
} catch (error) {
  if(error instanceof validationError) {
    console.error("Validation Error:", error.message);
  } else {
    console.error("Unknown Error:", error);
  }
}

// Create typed error handler
class APIError extends Error {
  constructor(message:string, public statusCode:number) {
    super(message);
  }
}

function getUSer(id:number) {
  if (id != 1){
    throw new APIError("User not found", 404);
  }
  return {id:1, name:"Dhanraj"};
}


function safeGetUser(id:number) {
  try
  {
        return { success: true, data: getUSer(id) };
   
  }
  catch(error) {
    if (error instanceof APIError) {
      return { success: false, error: error.message,  };
    }
   return { success: false, message: "Something went wrong" };

  }
}
console.log(safeGetUser(1));