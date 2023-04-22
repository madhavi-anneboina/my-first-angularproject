import { Component,ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@ViewChild ("para") p:any;

@ViewChildren ("tera") t : any

pest(){
  console.log(this.p.nativeElement.innerText)
  console.log(this.t._results[0].nativeElement.innerText)
}
 


}
