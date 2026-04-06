"use strict";
function CreateUser(req) {
    if (!req.name) {
        return {
            success: false,
            meassage: "Name is required"
        };
    }
    return {
        success: true,
        meassage: "User created successfully",
        data: {
            id: 1,
            name: req.name
        },
    };
}
const response = CreateUser({ name: "John", age: 30 });
console.log(response);
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["CreditCard"] = "CreditCard";
    PaymentMethod["COD"] = "COD";
    PaymentMethod["UPI"] = "UPI";
})(PaymentMethod || (PaymentMethod = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Confirmed"] = "Confirmed";
})(OrderStatus || (OrderStatus = {}));
function createOrder(req) {
    if (req.items.length === 0) {
        return {
            success: false,
            message: "Order must contain at least one item",
        };
    }
    const totalAmount = req.items.reduce((total, item) => total + item.price * item.quantity, 0);
    return {
        success: true,
        message: "Order created successfully",
        data: {
            orderId: "ORD001",
            totalAmount,
            status: OrderStatus.Pending
        },
    };
}
const orderResponse = createOrder({
    userId: "user001",
    items: [
        { productId: 101, quantity: 2, price: 50 },
        { productId: 102, quantity: 1, price: 100 },
    ],
    shippingAddress: "rajpath club road, ahemdabad",
    paymentMethod: PaymentMethod.CreditCard,
});
console.log(orderResponse);
class UserRepository {
    users = [];
    getById(id) {
        return this.users.find(u => u.id === id);
    }
    create(name) {
        const user = { id: Date.now(), name };
        this.users.push(user);
        return user;
    }
}
class UserService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    getUser(id) {
        const user = this.repo.getById(id);
        if (!user)
            throw new Error("User not found");
        return user;
    }
    createUser(name) {
        return this.repo.create(name);
    }
}
const repo = new UserRepository();
const service = new UserService(repo);
const user = service.createUser("Alice");
console.log(service.getUser(user.id));
const user2 = service.createUser("john wick");
console.log(service.getUser(user2.id));
