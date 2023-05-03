import { Component,ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MobileService } from './mobile.service';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  show(un:any,p:any){
    console.log(un)
    console.log(p)

  }
  submit(form:any){
    console.log(form)

  }
 
 
constructor(private ms:MobileService){}


 ngOnInit() : void {



 }

}
