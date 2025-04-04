import { Component } from '@angular/core';
import {Todo} from '../todo';
@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  todoList: Todo[] = [
    {
      id: 0,
      title: 'Kup parówki',
      isCompleted: false,
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


}
