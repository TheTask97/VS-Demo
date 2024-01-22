import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoItem } from './model/TodoItem';

@Injectable({
  providedIn: 'root'
})
export class  RestDataService{

  private apiUrl = '/todo/';

  constructor(private http: HttpClient) { }

  getAllTodoItems(): Observable<TodoItem[]>{
    return this.http.get<TodoItem[]>(this.apiUrl);
  }

  createNewTodoItem(todoItem: TodoItem){
    return this.http.post<any>(this.apiUrl, todoItem);
  }

  updateTodoItem(todoItem: TodoItem) {
    return this.http.put<any>(this.apiUrl + todoItem.id, todoItem);
  }

  deleteTodoItem(id: number){
  return this.http.delete<any>(this.apiUrl+id);
  }



}
