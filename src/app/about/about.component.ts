import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
   constructor(private ts:TestService){}
   mobiles = this.ts.mobiles
}
