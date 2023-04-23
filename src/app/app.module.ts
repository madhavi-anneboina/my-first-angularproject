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
import { NoteAppComponent } from './note-app/note-app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RouterModule,Routes } from '@angular/router';
import { TestService } from './test.service';


const routes:Routes= [
  {
    path : '' , component : HomeComponent
  },
  {
    path : 'about' , component : AboutComponent
  },
  {
    path : 'contact' , component : ContactComponent
  },
 
]


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
    NoteAppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
