import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {
  @Output() cancel = new EventEmitter<void>()
  @Output() add = new EventEmitter()

  enteredTitle = ''
  enteredData = ''
  enteredSummary = ''

  onCancelButtonClick() {
    this.cancel.emit()
  }

  onSubmit() {
    this.add.emit(
     {  title: this.enteredTitle,
        summary: this.enteredSummary,
        dueData: this.enteredSummary
     }
    )
  }
}
