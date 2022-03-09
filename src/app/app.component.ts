import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Todo, Recipe } from '@zerops/zestrat-models';
import { TodosService } from './todos.service';

@Component({
  selector: 'zr-app',
  templateUrl: './app.component.html'
})
export class AppComponent {

  recipe: Recipe = JSON.parse(environment.recipeConfig);
  todos: Todo[];

  constructor(private _todosService: TodosService) {
    this.loadTodos();
  }

  addTodo(text: string) {
    this._todosService
      .add$({ text })
      .subscribe(() => this.loadTodos());
  }

  deleteTodo(id: string) {
    this._todosService
      .delete$(id)
      .subscribe(() => this.loadTodos());
  }

  updateTodo(id: string, data: Partial<Todo>) {
    this._todosService
      .update$(id, data)
      .subscribe(() => this.loadTodos());
  }

  loadTodos() {
    this._todosService
      .findAll$()
      .subscribe((todos) => this.todos = todos)
  }

}
