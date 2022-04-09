import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  showForm: boolean = false

  toggleForm () {
    this.showForm = !this.showForm
  }

}
