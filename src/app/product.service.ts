import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  products = [

   
    {
      "id" :1,
      "img" :"https://sp.yimg.com/ib/th?id=OP.3%2bmAx%2fkGPNDr9A474C474&o=5&pid=21.1&w=160&h=105",
      "price":109.85,
       "name" :"Shirt",
       "category":"men"
    },
    {
      "id" :2,
      "img" :"https://sp.yimg.com/ib/th?id=OP.iQLKEyugvvLsZA474C474&o=5&pid=21.1&w=160&h=105",
      "price":109.85,
       "name" :"Shirt",
       "category":"women"
    },
    {
      "id" :3,
      "img" :"https://sp.yimg.com/ib/th?id=OP.iQLKEyugvvLsZA474C474&o=5&pid=21.1&w=160&h=105",
      "price":109.85,
       "name" :"Shirt",
       "category":"women"
    },
    {
      "id" :4,
      "img" :"https://sp.yimg.com/ib/th?id=OP.iQLKEyugvvLsZA474C474&o=5&pid=21.1&w=160&h=105",
      "price":109.85,
       "name" :"Shirt",
       "category":"men"
    },
    {
    "id" :5,
      "img" :"https://sp.yimg.com/ib/th?id=OP.iQLKEyugvvLsZA474C474&o=5&pid=21.1&w=160&h=105",
      "price":109.85,
       "name" :"Shirt",
       "category":"men"
    },
    {
      "id" :6,
      "img" :"https://sp.yimg.com/ib/th?id=OP.go6lSOkEuqODyA474C474&o=5&pid=21.1&w=160&h=105",
      "price":109.85,
       "name" :"Shirt",
       "category":"Men"
    },
    {
      "id" :7,
      "img" :"https://tse4.explicit.bing.net/th?id=OIP.WNSS4vJt9-mi_iRvPTY7zQHaGW&pid=Api&P=0",
      "price":109.85,
       "name" :"phone",
       "category":"Electronics"
    }
  ]
}
