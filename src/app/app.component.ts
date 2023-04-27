import { Component,ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mobiles = [
    {
      name :"xyz",
      price : 20000,
      ram : 6,
      storage : 64
    },
    {
      name :"abc",
      price : 10000,
      ram : 16,
      storage : 164
    },
    {
      name :"mnm",
      price : 8000,
      ram : 62,
      storage : 164
    }
  ]
constructor(){}

// // Content about observable 
// myobs = new Observable(
//   (listner) =>{
//     listner.next("hellpppp")
//     listner.next(2)
//     setTimeout(() => listner.next(3),1000);
//     setTimeout(() => listner.next(4),1000);

//     setTimeout(() => listner.next(6),1000);
//     setTimeout(() => listner.complete(),1000);
// })

// subscribe(){
//   this.myobs.subscribe(
//     data => {console.log(data)},
//     err => {console.log(err)},
//     () => {console.log("completed")}
//   )}
// data :any
// getData(){
//   this.http.get("https://fakestoreapi.com/products")
//   .subscribe((data)=>{
//     this.data = data;

//   })
// }
 


}
