import { Component , EventEmitter, Input, Output} from '@angular/core';
import { Task } from './task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input()userTask!: Task
  @Output()complete = new EventEmitter<string>()

  onComplite() {
    this.complete.emit(this.userTask.id)
  }
}
