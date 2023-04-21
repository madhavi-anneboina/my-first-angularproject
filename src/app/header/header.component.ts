import { Component,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
 @Output()  customevent = new EventEmitter()
 
 message =  "passed to parent"

 data = "This is demo of child to parent component"

 array  = ["10","20","30","40"]
  constructor(){
  }

}
