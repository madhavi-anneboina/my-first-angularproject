import { Component,EventEmitter,Input,Output} from '@angular/core';
import { TestService } from '../test.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
 constructor(private r:Router){}
 navigate(){
  this.r.navigate(['/home'])

 }

}
