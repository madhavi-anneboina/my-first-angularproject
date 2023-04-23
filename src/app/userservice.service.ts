import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }

  users =  [
    {
     "id" : "1",
     "name" : "Jeniffer",
     "username" : "Bret",
     "email" :"Jeniffer@gmail.com",
     "phone" : "999999999"

    },
    {
      "id" : "2",
      "name" : "Madhavi",
      "username" : "Mad",
      "email" :"mad@gmail.com",
      "phone" : "1111111111"
     },
     {
      "id" : "3",
      "name" : "venakat",
      "username" : "venky",
      "email" :"ve@gmail.com",
      "phone" : "888888888"
 
     },
     {
      "id" : "4",
      "name" : "Ram",
      "username" : "ramy",
      "email" :"ramy@gmail.com",
      "phone" : "7777777777"
 
     },
     {
      "id" : "5",
      "name" : "Sam",
      "username" : "samy",
      "email" :"samy@gmail.com",
      "phone" : "00000000"
 
     }
  ]
}
