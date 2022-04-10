import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Todo, Recipe } from '@zerops/zestrat-models';
import { TodosService } from './todos.service';

@Component({
  selector: 'zr-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {

  zeropsRecipeConfig: Recipe = JSON.parse(environment.zeropsRecipeConfig);
  todos: Todo[];
  projectDiagram: any;

  @ViewChild('zProjectDiagramElRef')
  zProjectDiagramElRef: ElementRef<any>;

  constructor(private _todosService: TodosService) { }

  ngAfterViewInit() {
    this.projectDiagram = this.zProjectDiagramElRef.nativeElement;

    this.projectDiagram.simulateGet(this.zeropsRecipeConfig.guiEndpoint);

    this.loadTodos(true);
  }

  addTodo(text: string) {
    this.projectDiagram.simulatePost(`${this.zeropsRecipeConfig.apiEndpoint}/todos`, ['db']);

    this._todosService
      .add$({ text })
      .subscribe(() => this.loadTodos());
  }

  deleteTodo(id: number | string) {

    this.projectDiagram.simulateDelete(`${this.zeropsRecipeConfig.apiEndpoint}/todos`, ['db']);

    this._todosService
      .delete$(id)
      .subscribe(() => this.loadTodos());
  }

  updateTodo(id: number | string, data: Partial<Todo>) {

    this.projectDiagram.simulatePatch(`${this.zeropsRecipeConfig.apiEndpoint}/todos`, ['db']);

    this._todosService
      .update$(id, data)
      .subscribe(() => this.loadTodos());
  }

  loadTodos(triggerSimulation = false) {

    this._todosService
      .findAll$()
      .subscribe((todos) => this.todos = todos);

    if (triggerSimulation) {
      this.projectDiagram.simulateGet(`${this.zeropsRecipeConfig.apiEndpoint}/todos`, ['db']);
    }
  }

}
