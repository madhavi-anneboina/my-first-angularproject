import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RockPaperScissorComponent } from './rock-paper-scissor/rock-paper-scissor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    LoginComponent,
    SearchComponent,
    CalculatorComponent,
    RockPaperScissorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
