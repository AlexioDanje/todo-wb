import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo.model';

const baseUrl = 'http://localhost:8080/todo';

@Injectable({ providedIn: 'root' })

export class TodoService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(baseUrl + '/all');
  }

  get(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${baseUrl}/${id}`);
  }

  create(title: string): Observable<Todo> {
    const data = {
      title
    };
    return this.http.post<Todo>(baseUrl + '/create', data);
  }

  update(id: number, data): Observable<Todo> {
    return this.http.put<Todo>(`${baseUrl}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
