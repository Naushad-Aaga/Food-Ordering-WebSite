import { Cartitem } from "./cartitem";

export class Cart{
    item:Cartitem[]=[];

    get totalPrice():number{
        let totalPrice = 0;
        this.item.forEach(item => {
            totalPrice +=item.price;
        });
        return totalPrice;

    }
}