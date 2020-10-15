import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
             selector: 'app-todo-list',
             templateUrl: './todo-list.component.html',
             styleUrls: ['./todo-list.component.less']
           })
export class TodoListComponent {

  todos: any;
  title = '';

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.retrieveTodos();
  }

  retrieveTodos(): void {
    this.todoService.getAll()
        .subscribe(
          data => this.todos = data,
          error => console.error(error));
    console.log("todos"+this.todos);
  }

  refreshList(): void {
    this.retrieveTodos();
  }

}


