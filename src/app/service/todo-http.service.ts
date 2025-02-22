import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoHttpService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<ToDoItem[]>('https://localhost:44309/ToDoItems');
  }

  create(title: string, description: string) {
    return this.httpClient.post<ToDoItem>(
      'https://localhost:44309/ToDoItems/',
      {
        title: title,
        description: description,
        isDone: false,
      }
    );
  }

  updateItem(toDoItem: ToDoItem) {
    return this.httpClient.put<ToDoItem>(`https://localhost:44309/ToDoItems/${toDoItem.id}`, toDoItem);
  }

  getItemById(id: number) {
    return this.httpClient.get<ToDoItem>(
      `https://localhost:44309/ToDoItems/${id}`
    );
  }

  deleteItem(id: number) {
    return this.httpClient.delete<ToDoItem>(`https://localhost:44309/ToDoItems/${id}`)
  }
}
