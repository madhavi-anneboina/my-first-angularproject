import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  taskId=5

  todoList = [
    {
      id : 1, 'task' : "Task1"
    },
    {
      id : 2, 'task' : "Task2"
    },
    {
      id : 3, 'task' : "Task3"
    },
    {
      id : 4, 'task' : "Task4"
    },
  ]

  constructor() { }
  addTodo(taskName:any){
    this.todoList.push({"id":this.taskId++, "task" : taskName})


  }
}
