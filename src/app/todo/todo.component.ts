import {Component, EventEmitter, Output} from '@angular/core';
import {TodoModel} from '../todo.model';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  @Output() newTodoEvent = new EventEmitter<TodoModel>();

  newTodo(label: string) {
    let newTodo: TodoModel = {
      id: 10,
      title: label,
      isCompleted: false,
    };
    this.addNewTodo(newTodo)
  }

  addNewTodo(todo: TodoModel) {
    this.newTodoEvent.emit(todo);
  }
}
