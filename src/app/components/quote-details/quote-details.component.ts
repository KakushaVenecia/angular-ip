import { Component, OnInit , Input} from '@angular/core';
// import { Quote } from 'src/app/quote';
// import { TimeElapsedPipe } from 'src/app/time-elapsed.pipe';
// import { FormComponent } from '../form/form.component';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
@Input() public quote:any;

  constructor() { 

  }

  ngOnInit(): void {
  }

}

