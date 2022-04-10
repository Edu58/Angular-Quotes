import { Component } from '@angular/core';
import { Quote } from 'src/app/model/quote.model';

@Component({
  selector: 'app-quoteslist',
  templateUrl: './quoteslist.component.html',
  styleUrls: ['./quoteslist.component.css']
})
export class QuoteslistComponent{

  myQuotes: Quote[] = [
    new Quote( 'The purpose of our lives is to be happy.', 'Dalai Lama', 'Ed'),
    new Quote( 'Life is what happens when youre busy making other plans.', 'John Lennon', 'Ed' ),
    new Quote( 'Get busy living or get busy dying.', 'Stephen King', 'Ed' )
  ].sort()

  addNewQuoteToList ( oneQuote: Quote ): void {
    const { person } = oneQuote
    const { quote } = oneQuote
    const { author } = oneQuote

    const newQuoteObject: Quote = new Quote(quote, author, person)
    
    this.myQuotes.push( newQuoteObject )
  }

  sortedQuotes (): Quote[] {
    return this.myQuotes.sort((a: Quote, b: Quote): number => b.upvotes - a.upvotes )
  }

  deleteQuote (i: number): void {
    this.myQuotes.splice(i, 1)
  }
}
