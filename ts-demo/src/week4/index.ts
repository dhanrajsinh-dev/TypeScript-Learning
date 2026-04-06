// Create User class model
class User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  createdAt: Date;
  readonly role: string = "USER";

  constructor(
    id: number,
    name: string,
    email: string = "abc@gmail.com",
    isActive: boolean,
    createdAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.isActive = isActive;
    this.createdAt = createdAt;
  }

  deactivate(): void {
    this.isActive = false;
  }
}

const user1 = new User(1, "dhanrajsinh", "abc@gmail.com", true, new Date());
// console.log(user1);

// Create service class with private methods
class UserService{
  private users:User[]=[];

  private validateUser(user:User){
    if(!user.name ){
      throw new Error('user name must be required!')
    }

     if(!user.email ){
      throw new Error('user email must be required!')
    }
  }

  addUser(user:User):void{
    this.validateUser(user);
    this.users.push(user)
  }

  getUser(id:number):User | undefined{
    return this.users.find((user)=>user.id===id);
  }

  getAllUsers():User[]{
    return this.users
  }

  updateUser(id: number, updateUser: Partial<User>): void {
    const user = this.getUser(id);
    if (user) {
      Object.assign(user, updateUser);
    } else {
      throw new Error('user not found!');
    }
  }

  deleteUser(id: number): void {
    console.log(`Deleting user with ID: ${id}`);
    this.users = this.users.filter((user) => user.id !== id);
  }
}

const userService = new UserService();
// userService.addUser(user1);
// console.log(userService.getAllUsers());

// console.log("get single user");
// console.log(userService.getUser(1));

// console.log("updated user")
// userService.updateUser(1, { name: "dhanrajsinh chudasama" });

// console.log(userService.getAllUsers());

// console.log("delete user");
// userService.deleteUser(1);
// console.log(userService.getAllUsers());


//  encapusulation example
class User2{
  private name:string;

  constructor(name:string){
    this.name=name;
  }
  
  setName(name:string):void{
    if(!name){
      throw new Error('name must be required!')
    }
    this.name=name;
  }

  getName():string{
    return this.name;
  }
}

// const user2= new User2("dhanrajsinh");
// console.log(user2.getName());
// user2.setName("dhanrajsinh chudasama");
// console.log(user2.getName());

 
 
 
// Split code into multiple modules
// import { add, sub } from './utills/maths';

// console.log(add(10, 5));
// console.log(sub(10, 5));



// namespace example
namespace Ecommerce{
  export interface Product{
    id:number;
    name:string;
  }
  export class ProductService{
    private products:Product[]=[];

    addProduct(product:Product){
      this.products.push(product);
    }

    getAllProducts():Product[]{
      return this.products;
    }

  }
}


const service= new Ecommerce.ProductService();
service.addProduct({id:1,name:"kaptop"});
// console.log(service.getAllProducts());




// Create partial update DTO

interface USER{
  id:number;
  name:string;
  email:string;
  age:number;
  isActive:boolean;
  createdAt:Date;
}  

type UpdateUserDTO=Partial<Omit<USER,'id' | 'createdAt'>>;

const updateUser:UpdateUserDTO={
  name:"dhanrajsinh Dabhi",
  email:"dhanraj@gmail.com",
  isActive:true,
}

// console.log(updateUser);


// Create dictionary mapping example
type Role = 'ADMIN' | 'USER' | 'GUEST';
const rolePermissions: Record<Role, string[]> = {
  ADMIN:['read','write' ,'delete'],
  USER:['read','write'],
  GUEST:['read']
}


