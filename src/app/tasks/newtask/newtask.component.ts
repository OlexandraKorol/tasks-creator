import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {
  @Input() isClicked!: boolean
  @Output() chancgeChlickedState = new EventEmitter<void>()

  onCancelButtonClick() {
    this.chancgeChlickedState.emit()
  }
}
