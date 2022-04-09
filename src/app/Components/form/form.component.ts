import { Quote } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output() newQuote: EventEmitter<any> = new EventEmitter

  showForm: boolean = false

  toggleForm (): void {
    this.showForm = !this.showForm
  }

  handleSubmit ( form: any ): void {
    this.newQuote.emit(form.value)
  }

}
