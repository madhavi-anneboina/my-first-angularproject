import { Component,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
 @Output()  customevent = new EventEmitter()
 
 message =  "passed to parent"

 passtoParent(){
  this.customevent.emit(this.message)
 }
 updatemessage(e :any){
  this.message = e.target.value
 }
  constructor(){
  }

}
