import { Component } from '@angular/core';
import { Quote } from 'src/app/model/quote.model';

@Component({
  selector: 'app-quoteslist',
  templateUrl: './quoteslist.component.html',
  styleUrls: ['./quoteslist.component.css']
})
export class QuoteslistComponent{

  myQuotes: Quote[] = [
    new Quote( 'run', 'mexcvg sdrgsergsfbsefgsvertgw r54 wtrtwrqt wrtw5tq4 tqrtq4 qt4', 'fun' ),
    new Quote( 'dfd', 'sdasds', 'sdasd' ),
    new Quote( 'run', 'mexcvg sdrgsergsfbsefgsvertgw r54 wtrtwrqt wrtw5tq4 tqrtq4 qt4', 'fun' ),
    new Quote( 'dfd', 'sdasds', 'sdasd' ),
    new Quote( 'run', 'mexcvg sdrgsergsfbsefgsvertgw r54 wtrtwrqt wrtw5tq4 tqrtq4 qt4', 'fun' ),
    new Quote( 'dfd', 'sdasds', 'sdasd' ),
    new Quote( 'run', 'mexcvg sdrgsergsfbsefgsvertgw r54 wtrtwrqt wrtw5tq4 tqrtq4 qt4', 'fun' ),
    new Quote('dfd', 'sdasds', 'sdasd')
  ]
}
