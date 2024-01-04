import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cartitem } from '../shared/models/cartitem';
import { Cart } from '../shared/models/Cart';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!:Cart;
  constructor(private carService: CartService){
    this.setCart();
    this.cart = this.carService.getCart();
  }
  removeFromCart(cartItem: Cartitem){
    this.carService.removeFromCart(cartItem.food.id);
    this.setCart(); //Instance Load Data
  }
  setCart() {
    this.cart=this.carService.getCart();
    
  }
  changeQuantity(cartItem:Cartitem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.carService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

}
