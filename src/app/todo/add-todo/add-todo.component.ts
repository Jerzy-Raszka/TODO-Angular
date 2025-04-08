import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [ReactiveFormsModule],
  templateUrl: './add-todo.component.html',
})
export class AddTodoComponent {
  @Output() newTodoEvent = new EventEmitter<string>();

  protected readonly title = new FormControl('');

  protected onTodoAdded(): void {
    const label: string | null = this.title.value;
    if (label) {
      this.newTodoEvent.emit(label);
    }
  }
}
