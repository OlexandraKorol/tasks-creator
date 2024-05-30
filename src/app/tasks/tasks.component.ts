import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';

import { DUMMY_TASKS } from '../dummy.tasks'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() userName?: string
  @Input() id!: string

  userTasks = DUMMY_TASKS

  get selectedUserTasks() {
    return this.userTasks.filter((task) => task.id === this.id)
  }

  onSelectedTasks(id: string) {
    console.log('task done', id)
    this.userTasks = this.userTasks.filter((task) => task.id !== id)
  }
}
