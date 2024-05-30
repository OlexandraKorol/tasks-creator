import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';

import { DUMMY_TASKS } from '../dummy.tasks'
import { NewtaskComponent } from './newtask/newtask.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewtaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() userName?: string
  @Input() id!: string
  isAddingTask: boolean = false

  userTasks = DUMMY_TASKS

  get selectedUserTasks() {
    return this.userTasks.filter((task) => task.id === this.id)
  }

  onSelectedTasks(id: string) {
    this.userTasks = this.userTasks.filter((task) => task.id !== id)
  }

  onStartAddingTask() {
    this.isAddingTask = true
  }

  onChangeClickedButton() {
    this.isAddingTask = false
  }

  onAddNewTask(task:any) {
    this.userTasks.push({
      ...task,
      userId: this.id,
      id: `${new Date().getTime()}`
    })
    this.isAddingTask = false
  }
}
