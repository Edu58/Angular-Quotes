import { Quote } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { faMaximize, IconDefinition, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {

  @Input() receivedQuote: any
  @Input() indexTracker!: number

  expand: IconDefinition = faMaximize
  bin: IconDefinition = faTrashCan

  showDetails (): void {
    this.receivedQuote.show = !this.receivedQuote.show
  }
}
