import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  items: ToDoItem[] = [
    {
      id: 0,
      title: 'buy milk',
      description: 'ababa',
      isDone: false,
    },
    {
      id: 1,
      title: 'buy cookie',
      description: 'ababa',
      isDone: false,
    },
  ];
  constructor() {}

  getAll() {
    return this.items;
  }

  create(title: string, description: string) {
    this.items.push({
      id: this.items.length,
      title: title,
      description: description,
      isDone: false,
    });
  }
}
