import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact-form',
  template: ` 
  <h1>Contact Form</h1>
    <form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" [(ngModel)]="contact.name" required> <br/>
      <label for="email">Email</label>
      <input type="email" id="email" name="email" [(ngModel)]="contact.email" required> <br/>
      <label for="message">Message</label>
      <textarea id="message" name="message" [(ngModel)]="contact.message" required></textarea> <br/>
      <button type="submit" [disabled]="!contactForm.valid">Submit</button>
    </form>

  `,

})
export class ContactFormComponent {
  contact = { name: '', email: '', message: '' };

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted!', this.contact);
      // Send form data to backend or perform other actions here
    }
  }

}
