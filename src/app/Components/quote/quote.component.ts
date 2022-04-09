import { Quote } from 'src/app/model/quote.model';
import { Component, OnInit } from '@angular/core';
import { faMaximize, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  expand: IconDefinition = faMaximize

  constructor () { }
  
  quotes: Quote[] = [
    new Quote( 'run', 'mexcvg sdrgsergsfbsefgsvertgw r54 wtrtwrqt wrtw5tq4 tqrtq4 qt4', 'fun' ),
    new Quote( 'dfd', 'sdasds', 'sdasd' ),
    new Quote( 'run', 'mexcvg sdrgsergsfbsefgsvertgw r54 wtrtwrqt wrtw5tq4 tqrtq4 qt4', 'fun' ),
    new Quote( 'dfd', 'sdasds', 'sdasd' ),
    new Quote( 'run', 'mexcvg sdrgsergsfbsefgsvertgw r54 wtrtwrqt wrtw5tq4 tqrtq4 qt4', 'fun' ),
    new Quote( 'dfd', 'sdasds', 'sdasd' ),
    new Quote( 'run', 'mexcvg sdrgsergsfbsefgsvertgw r54 wtrtwrqt wrtw5tq4 tqrtq4 qt4', 'fun' ),
    new Quote('dfd', 'sdasds', 'sdasd')
  ]

  showDetails (i: number) {
    this.quotes[i].show = !this.quotes[i].show
  }

  ngOnInit(): void {
  }
}
