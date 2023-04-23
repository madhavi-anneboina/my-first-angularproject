import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent {
 constructor (private route:ActivatedRoute, private us:UserserviceService) {}
 cuser : any;
 ngOnInit():void {
  this.route.paramMap.subscribe(
    params =>{
      let userid = + params.get('id');
      this.cuser = this.us.users.find(u=>u.id == userid)
    }
  )
//   let userid = +this.route.snapshot.paramMap.get('id')
//      this.cuser = this.us.users.find(u=>u.id == userid)
//  }
}
}
