import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  constructor(private ts:TodoService){}
  todos:any

  ngOnInit(): void{
    this.todos = this.ts.todoList

  }

}
