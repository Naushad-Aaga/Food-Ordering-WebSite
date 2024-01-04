import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food =>food.id == id)!;
  }

  getAll():Foods[]{
    return [
   {
      id:1,
      name:'Hamburger With Vegetables And Meat',
      price:199,
      favorite : true,
      star:4.5,
      imageUrl:'/assets/food1.jpg',
      tags:['FastFood','Lunch']
   },

   {
    id:2,
    name:'Sliced Pizza',
    price:150,
    favorite : true,
    star:4.2,
    imageUrl:'/assets/food2.jpg',
    tags:['FastFood','Lunch']
 },

 {
  id:3,
  name:'Fried Stories',
  price:99,
  favorite : false,
  star:5,
  imageUrl:'/assets/food3.jpg',
  tags:['FastFood','Lunch']
},

{
  id:4,
  name:'Avocado Toast',
  price:111,
  favorite : false,
  star:4.2,
  imageUrl:'/assets/food4.jpg',
  tags:['FastFood','Lunch']
},

{
  id:5,
  name:'Cheese Burger',
  price:149,
  favorite : true,
  star:4.3,
  imageUrl:'/assets/food5.jpg',
  tags:['FastFood','Lunch']
},

{
  id:6,
  name:'Pizza',
  price:250,
  favorite : true,
  star:4.5,
  imageUrl:'/assets/food6.jpg',
  tags:['FastFood','Lunch']
},

{
  id:7,
  name:'Classic Double Burger',
  price:299,
  favorite : false,
  star:5,
  imageUrl:'/assets/food7.jpg',
  tags:['FastFood','Lunch']
},

{
  id:8,
  name:'Buger With Fries',
  price:250,
  favorite : true,
  star:3.7,
  imageUrl:'/assets/food8.jpg',
  tags:['FastFood','Lunch']
},

{
  id:9,
  name:'Sandwiche',
  price:199,
  favorite : true,
  star:4.6,
  imageUrl:'/assets/food9.jpg',
  tags:['FastFood','Lunch']
},

{
  id:10,
  name:'Fries',
  price:99,
  favorite : true,
  star:4.6,
  imageUrl:'/assets/food10.jpg',
  tags:['FastFood','Lunch']
},
   ]
  }

}

