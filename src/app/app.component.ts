import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-angularproject';

  counter : number = 0
  name : string ="madhavi"
  city : string = "Hyderabad"
  show = true
  // movies = ["RRR" ,"Ts","St"]
  movies = ""

  increment(){
    this.counter +=1
  }
  decrement(){
    this.counter -=1
  }
  changeName(e :any){
    this.name = e.target.value
  }
  updatecity(){
    this.city = "Banglore"
  }
}
