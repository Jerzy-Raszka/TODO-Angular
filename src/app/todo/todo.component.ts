import { Component } from '@angular/core';
import { Todo } from '../../shared/models/todo.model';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@Component({
  selector: 'app-list',
  imports: [AddTodoComponent, TodoItemComponent],
  templateUrl: './todo.component.html',
})
export class TodoComponent {
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

  protected addTodoToList(label: string): void {
    const newTodo: Todo = {
      title: label,
      completed: false,
    };
    this.todoList.push(newTodo);
    console.log(this.todoList);
  }

  protected statusChange(index: number): void {
    this.todoList[index].completed = !this.todoList[index].completed;
  }

  protected deleteTodo(index: number): void {
    this.todoList.splice(index, 1);
  }

  protected editTodo(event: { index?: number; newLabel?: string }): void {
    if (event.index != null && event.newLabel != null) {
      this.todoList[event.index].title = event.newLabel;
    }
    console.log(this.todoList);
  }
}
