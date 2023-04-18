
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  template: `
  <h1>Reactive Form</h1>
    <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
      <label for="name">Name</label>
      <input type="text" id="name" formControlName="name">
      <label for="email">Email</label>
      <input type="email" id="email" formControlName="email">
      <label for="message">Message</label>
      <textarea id="message" formControlName="message"></textarea>
      <button type="submit" [disabled]="contactForm.invalid">Submit</button>
    </form>
  `,

})
export class ReactiveFormComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Initialize the form group with form controls and validators
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted!', this.contactForm.value);
      // Send form data to backend or perform other actions here
    }
  }

}
