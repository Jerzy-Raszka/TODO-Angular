import {Component, Input} from '@angular/core';
import {Todo} from '../../../shared/models/todo.model';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todoItem.component.html',
})
export class TodoItemComponent {
  @Input() todoList: Todo[] | undefined;
}
