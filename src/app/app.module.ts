import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuoteComponent } from './Components/quote/quote.component';
import { FormComponent } from './Components/form/form.component';
import { QuoteslistComponent } from './Components/quoteslist/quoteslist.component';
import { QuotedetailComponent } from './Components/quotedetail/quotedetail.component';
import { TimepassedPipe } from './Pipes/timepassed.pipe';
import { HighlightDirective } from './Directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    FormComponent,
    QuoteslistComponent,
    QuotedetailComponent,
    TimepassedPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
