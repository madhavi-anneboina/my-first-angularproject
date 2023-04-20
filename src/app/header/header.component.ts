import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  @Input() childtitle: any
  @Input() d1 : any
   @Input() a1: any
 
  constructor(){
  }

}
