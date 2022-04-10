import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quotedetail',
  templateUrl: './quotedetail.component.html',
  styleUrls: ['./quotedetail.component.css']
})
export class QuotedetailComponent{

  @Input() sentQuote!: any

}
