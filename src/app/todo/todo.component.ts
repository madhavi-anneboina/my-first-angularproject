import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  todoList : string [] =[];
  inputvalue : string = "";

  addtodo(){
    if (this.inputvalue !=""){
    this.todoList.push(this.inputvalue)
    this.inputvalue = ""

    } else {
      alert ("Please enter proper value")
    }
   
  }
  removetodo(name : string){
    this.todoList = this.todoList.filter(value => value !==name);
  }

  ngOnInit():void {
    this.todoList = ["Task 1","Task 2"]
  }

}
