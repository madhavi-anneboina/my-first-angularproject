import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string ="";

  onSubmit() {
    // You can implement your login logic here
    // For example, you can send the email and password to a backend API for authentication
   
      if (this.email === 'example@example.com' && this.password === 'password') {
        // You can implement your login logic here
        console.log('Login successful');
      } else {
        // You can handle login failure and show appropriate error messages
        console.log('Login failed');
      }
    
  }

}
