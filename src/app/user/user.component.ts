import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TasksComponent } from '../tasks/tasks.component';
import { User } from './user.model';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TasksComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user!: User;
  @Input() selected!: boolean;

  @Output() getId = new EventEmitter()

  onSelectUser() {
    this.getId.emit(this.user.id)
  }
}
