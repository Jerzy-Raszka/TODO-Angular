import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../shared/models/todo.model';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Input({ required: true }) todoItem: Todo | undefined;
  @Input({ required: true }) todoIndex: number | undefined;
  @Output() changeStatusEvent = new EventEmitter<number>();
  @Output() deleteTodoEvent = new EventEmitter<number>();
  @Output() editTodoEvent = new EventEmitter<{
    index?: number;
    newLabel?: string;
  }>();

  changeStatus(index: number | undefined): void {
    this.changeStatusEvent.emit(index);
  }

  deleteTodo(index: number | undefined): void {
    this.deleteTodoEvent.emit(index);
  }

  editTodo(index: number | undefined, event: FocusEvent): void {
    const newName = (event.target as HTMLElement).textContent?.trim();
    this.editTodoEvent.emit({ index: index, newLabel: newName });
  }

  lineBreak(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }
}
