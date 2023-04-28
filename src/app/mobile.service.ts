import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private http:HttpClient) { }
  url ="http://localhost:5050/mobiles"

  mobiles:any =  [
    {
      name :"xyz",
      price : 20000,
      ram : 6,
      storage : 64
    },
    {
      name :"abc",
      price : 10000,
      ram : 16,
      storage : 164
    },
    {
      name :"mnm",
      price : 8000,
      ram : 62,
      storage : 164
    }
  ]
  
  fetchMibiles(){
    
  return this.mobiles
  }
  deleteMobile(id:any){
   return this.mobiles
  }
}
