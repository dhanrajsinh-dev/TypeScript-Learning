// req-res dto
interface cretaeUserReqDto{
    name: string;
    age:number;

}

interface createUserResDto{
    success: boolean;
    meassage: string;
    data?:{
        id:number;
        name:string;
    }
}

function CreateUser(req:cretaeUserReqDto):createUserResDto{

    if(!req.name ){
        return {
            success: false,
            meassage: "Name is required"
        }
    }

    return {
        success: true,
        meassage: "User created successfully",
        data:{
            id:1,
            name:req.name
        },
    }
}

const response = CreateUser({name:"John", age:30});
console.log(response);



// Create order API DTO types

interface OrderItemDTO{
    productId: number;
    quantity: number;
    price:number;
}

enum PaymentMethod{
    CreditCard = "CreditCard",
    COD = "COD",
    UPI = "UPI",
}

enum OrderStatus{
    Pending = "Pending",
    Confirmed = "Confirmed",
}

interface CreateOrderReqDTO{
    userId: string;
    items:OrderItemDTO[];
    shippingAddress: string;
    paymentMethod: PaymentMethod;
}

interface CreateOrderResDTO{
    success: boolean;
    message: string;
    data?:{
        orderId: string;
        totalAmount: number;
        status:OrderStatus;
    }
}

function createOrder(req: CreateOrderReqDTO): CreateOrderResDTO{
    if(req.items.length === 0){
        return{
            success: false,
            message: "Order must contain at least one item",
        }
    }

    const totalAmount = req.items.reduce((total, item) => total + item.price * item.quantity, 0);

    return {
        success: true,
        message: "Order created successfully",
        data:{
            orderId: "ORD001",
            totalAmount ,
            status: OrderStatus.Pending 
        },
    };
}

const orderResponse = createOrder({
    userId:  "user001",
    items:[
        {productId: 101, quantity: 2, price: 50},
        {productId: 102, quantity: 1, price: 100},
    ],
    shippingAddress: "rajpath club road, ahemdabad",
    paymentMethod: PaymentMethod.CreditCard,
});
console.log(orderResponse);


//  Create typed repository layer
type User3 = {
  id: number;
  name: string;
};
 
class UserRepository {
  private users: User3[] = [];

  getById(id: number): User3 | undefined {
    return this.users.find(u => u.id === id);
  }

  create(name: string): User3 {
    const user = { id: Date.now(), name };
    this.users.push(user);
    return user;
  }
}

 
class UserService {
  constructor(private repo: UserRepository) {}

  getUser(id: number) {
    const user = this.repo.getById(id);
    if (!user) throw new Error("User not found");
    return user;
  }

  createUser(name: string) {
    return this.repo.create(name);
  }
}
 
   
const repo = new UserRepository();
const service = new UserService(repo);


const user=service.createUser("Alice");
console.log(service.getUser(user.id));


const user2=service.createUser("john wick");
console.log(service.getUser(user2.id))