import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodoApi {
  private readonly http = inject(HttpClient);
  private readonly endpoint = 'https://jsonplaceholder.typicode.com/todos/';

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.endpoint);
  }
}