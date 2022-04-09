import { Quote } from 'src/app/model/quote.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor () { }
  
  quotes: Quote[] = [
    new Quote( 'run', 'me', 'fun' ),
    new Quote('dfd', 'sdasds', 'sdasd')
  ]

  showDetails (i: number) {
    this.quotes[i].show = !this.quotes[i].show
  }

  ngOnInit(): void {
  }
}
