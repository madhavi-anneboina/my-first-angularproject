import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'


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
import { MobileService } from './mobile.service';
import { UsersComponent } from './users/users.component';
import { UsercardComponent } from './usercard/usercard.component';
import { ProductsComponent } from './products/products.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TodoformComponent } from './todoform/todoform.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoService } from './todo.service';
import { ChildComponent } from './child/child.component';



const routes:Routes= [
  {
    path : '' , component : HomeComponent
  },
  {
    path : 'home' , component : HomeComponent,
   children : [
    {
      path : 'homeChild1' , component : TodoComponent
    },
    {
      path : 'homeChild2' , component : SearchComponent
    },
   ]
  },
  {
    path : 'about' , component : AboutComponent
  },
  {
    path : 'contact' , component : ContactComponent
  },
  {
    path : '* *' , component : NotfoundComponent
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
    UsersComponent,
    UsercardComponent,
    ProductsComponent,
    TodoformComponent,
    TodolistComponent,
    ChildComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [MobileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
