import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { DisplayComponent } from './components/display/display.component';
import { TimeElapsedPipe } from './time-elapsed.pipe';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DisplayComponent,
    TimeElapsedPipe,
    QuoteDetailsComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
