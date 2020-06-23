import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

var id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  userInput = new FormControl();
  todos = [];
  
  constructor() { }

  ngOnInit() {
  }

  onChange() {
    const { value } = this.userInput;
    console.log(this.userInput);
        
    if (value) {
      const todo = {
        id: id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.userInput.setValue('');
    }
  }

  toggleTodo(i) {
    this.todos[i].complete = !this.todos[i].complete;
  }

}
