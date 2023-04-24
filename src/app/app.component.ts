import { Component,ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private http:HttpClient){}

data :any
getData(){
  this.http.get("https://fakestoreapi.com/products")
  .subscribe((data)=>{
    this.data = data;

  })
}
 


}
