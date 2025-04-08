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

  changeStatus(index: number | undefined) {
    this.changeStatusEvent.emit(index);
  }
}
