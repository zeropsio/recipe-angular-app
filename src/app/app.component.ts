import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Todo, Recipe } from '@zerops/zestrat-models';
import { TodosService } from './todos.service';

@Component({
  selector: 'zr-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {

  recipe: Recipe = JSON.parse(environment.recipeConfig);
  todos: Todo[];

  @ViewChild('diagramRef')
  diagramRef: ElementRef<any>;

  constructor(private _todosService: TodosService) { }

  ngAfterViewInit() {
    this.diagramRef.nativeElement.runRequest({
      requestUrl: 'https://app-20109.app.zerops.io',
      requestType: 'GET'
    });

    this.diagramRef.nativeElement.runRequest({
      requestUrl: 'https://api-2014b-3000.app.zerops.io',
      requestType: 'GET',
      affectedServices: ['db']
    });

    this.loadTodos();
  }

  addTodo(text: string) {
    this._todosService
      .add$({ text })
      .subscribe(() => this.loadTodos());
  }

  deleteTodo(id: number | string) {
    this._todosService
      .delete$(id)
      .subscribe(() => this.loadTodos());
  }

  updateTodo(id: number | string, data: Partial<Todo>) {

    this.diagramRef.nativeElement.runRequest({
      requestUrl: 'https://api-2014b-3000.app.zerops.io',
      requestType: 'POST',
      affectedServices: ['db']
    });

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
