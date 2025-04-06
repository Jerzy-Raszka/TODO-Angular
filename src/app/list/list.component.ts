import {Component} from '@angular/core';
import {TodoModel} from '../todo.model';
import {TodoComponent} from '../todo/todo.component';

@Component({
  selector: 'app-list',
  imports: [
    TodoComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})

export class ListComponent {

  todoList: TodoModel[] = [
    {
      id: 0,
      title: 'Kup parówki',
      isCompleted: true,
    },
    {
      id: 1,
      title: 'Posprzątaj',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Ugotuj obiad',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Poproś o zdjęcie Perito',
      isCompleted: false,
    },
    {
      id: 4,
      title: 'Kiedy planszówki/dnd',
      isCompleted: false,
    },
  ];

  addTodo(newTodo: TodoModel) {
    this.todoList.push(newTodo);
    console.log(this.todoList)
  }

}
