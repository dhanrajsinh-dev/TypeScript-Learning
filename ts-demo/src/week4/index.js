"use strict";
// Create User class model
class User {
    id;
    name;
    email;
    isActive;
    createdAt;
    role = "USER";
    constructor(id, name, email = "abc@gmail.com", isActive, createdAt) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.isActive = isActive;
        this.createdAt = createdAt;
    }
    deactivate() {
        this.isActive = false;
    }
}
const user1 = new User(1, "dhanrajsinh", "abc@gmail.com", true, new Date());
// console.log(user1);
// Create service class with private methods
class UserService {
    users = [];
    validateUser(user) {
        if (!user.name) {
            throw new Error('user name must be required!');
        }
        if (!user.email) {
            throw new Error('user email must be required!');
        }
    }
    addUser(user) {
        this.validateUser(user);
        this.users.push(user);
    }
    getUser(id) {
        return this.users.find((user) => user.id === id);
    }
    getAllUsers() {
        return this.users;
    }
    updateUser(id, updateUser) {
        const user = this.getUser(id);
        if (user) {
            Object.assign(user, updateUser);
        }
        else {
            throw new Error('user not found!');
        }
    }
    deleteUser(id) {
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
class User2 {
    name;
    constructor(name) {
        this.name = name;
    }
    setName(name) {
        if (!name) {
            throw new Error('name must be required!');
        }
        this.name = name;
    }
    getName() {
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
var Ecommerce;
(function (Ecommerce) {
    class ProductService {
        products = [];
        addProduct(product) {
            this.products.push(product);
        }
        getAllProducts() {
            return this.products;
        }
    }
    Ecommerce.ProductService = ProductService;
})(Ecommerce || (Ecommerce = {}));
const service = new Ecommerce.ProductService();
service.addProduct({ id: 1, name: "kaptop" });
const updateUser = {
    name: "dhanrajsinh Dabhi",
    email: "dhanraj@gmail.com",
    isActive: true,
};
const rolePermissions = {
    ADMIN: ['read', 'write', 'delete'],
    USER: ['read', 'write'],
    GUEST: ['read']
};
console.log(rolePermissions);
