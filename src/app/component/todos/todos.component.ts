import { Component } from '@angular/core';
import {Todo} from './model/model'
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos!: Todo[];
  inputTodo:string = "";
  ngOnInit(): void {
    this.todos =  [
      {
        id:1,
        content: 'First todo',
        completed: false
      },
      {
        id:2,
        content: 'Second todo',
        completed: false 
      }
    ]
  }

addtoTask(){
    this.todos.push({
      content: this.inputTodo,
      completed: false,
      id: this.todos.length+1
    })
    this.inputTodo="";
  }

completed(id:number){
  this.todos.map((v,i) => {
    if (i==id) v.completed = !v.completed;

    return v;
  })
console.log(this.todos)
}
delete(id:number){
  this.todos.splice(id,1);
}
}
