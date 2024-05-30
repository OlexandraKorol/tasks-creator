import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TasksComponent } from '../tasks/tasks.component';

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TasksComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user!: User;

  @Output() getId = new EventEmitter()

  onSelectUser() {
    this.getId.emit(this.user.id)
  }
}
