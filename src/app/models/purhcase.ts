import { CustomerAccount } from "./customeraccount";
import { Product } from "./product";

export class Purhcase{
    id: number;
    customer: CustomerAccount;
    date: Date;
    soldProducts: Product;
    shippingAddress : string;
    paymentMethod : string;
    total : number;
}