import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TodoListComponent} from './todoList/todoList.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoListComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'TODO';
}
