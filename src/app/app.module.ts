import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RockPaperScissorComponent } from './rock-paper-scissor/rock-paper-scissor.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    LoginComponent,
    SearchComponent,
    CalculatorComponent,
    RockPaperScissorComponent,
    ContactFormComponent,
    ReactiveFormComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
