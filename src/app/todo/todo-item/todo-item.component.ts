import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../shared/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Input({ required: true }) todoItem!: Todo;
  @Input({ required: true }) todoIndex!: number;
  @Output() handleChangeStatus = new EventEmitter<number>();
  @Output() handleDeleteTodo = new EventEmitter<number>();
  @Output() handleEditTodo = new EventEmitter<{
    index: number;
    newLabel: string;
  }>();

  protected changeStatus(): void {
    this.handleChangeStatus.emit(this.todoIndex);
  }

  protected deleteTodo(): void {
    this.handleDeleteTodo.emit(this.todoIndex);
  }

  protected editTodo(event: FocusEvent): void {
    const newLabel = (event.target as HTMLElement).textContent?.trim();
    if (newLabel !== undefined) {
      this.handleEditTodo.emit({ index: this.todoIndex, newLabel });
    }
  }

  protected lineBreak(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }
}
