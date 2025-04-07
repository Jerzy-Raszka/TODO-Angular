import {Component, EventEmitter, Output} from '@angular/core';
import {Todo} from '../../../shared/models/todo.model';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './addTodo.component.html',
})
export class AddTodoComponent {
  @Output() newTodoEvent = new EventEmitter<Todo>();

  title = new FormControl('');

  protected onTodoAdded(label: string | null | undefined): void {
    if (label != null) {
      let newTodo: Todo = {
        title: label,
        completed: false,
      };
      this.emitNewTodo(newTodo)
    }
  }

  private emitNewTodo(todo: Todo): void {
    this.newTodoEvent.emit(todo);
  }
}
