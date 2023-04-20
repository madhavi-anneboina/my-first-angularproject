import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = "helloo"
 ctitle= "communication between the componrnts using @input decorator,selector"
 data1 = "this is about to go header component"
 array1 = ["10","20","30","40","50"]
 data2 = "this about to go another header componrnt"
 array2 =  ["100","200","300","400","500"]
}
