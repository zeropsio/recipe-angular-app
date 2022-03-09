import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Todo } from '@zerops/zestrat-models';

@Injectable({ providedIn: 'root' })
export class TodosService {

  private _endpoint = `${environment.apiEndpoint}/todos`;

  constructor(private _httpClient: HttpClient) {}

  findAll$() {
    return this._httpClient.get<Todo[]>(this._endpoint);
  }

  update$(id: string, data: Partial<Todo>) {
    return this._httpClient.patch<Todo>(
      `${this._endpoint}/${id}`,
      data
    );
  }

  delete$(id: string) {
    return this._httpClient.delete(`${this._endpoint}/${id}`);
  }

  add$(data: Partial<Todo>) {
    return this._httpClient.post<Todo>(`${this._endpoint}`, data);
  }

}
