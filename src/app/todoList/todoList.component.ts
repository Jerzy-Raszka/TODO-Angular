import {Component} from '@angular/core';
import {Todo} from '../../shared/models/todo.model';
import {AddTodoComponent} from './addTodo/addTodo.component';
import {TodoItemComponent} from './todoItem/todoItem.component';

@Component({
  selector: 'app-list',
  imports: [
    AddTodoComponent,
    TodoItemComponent
  ],
  templateUrl: './todoList.component.html',
})

export class TodoListComponent {

  protected readonly todoList: Todo[] = [
    {
      title: 'Kup parówki',
      completed: true,
    },
    {
      title: 'Posprzątaj',
      completed: false,
    },
    {
      title: 'Ugotuj obiad',
      completed: false,
    },
    {
      title: 'Poproś o zdjęcie Perito',
      completed: false,
    },
    {
      title: 'Kiedy planszówki/dnd',
      completed: false,
    },
  ];

  protected addTodoToList(newTodo: Todo): void {
    this.todoList.push(newTodo);
  }
}
