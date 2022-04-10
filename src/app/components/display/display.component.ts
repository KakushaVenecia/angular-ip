import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Quote } from 'src/app/quote';
// import { FormComponent } from '../form/form.component';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
@Input() public quotes:any = [];
@Output() public deleteSingleQuote = new EventEmitter();
@Output() public upvoteQuote = new EventEmitter();
@Output() public downvoteQuote = new EventEmitter();


  constructor() { 

  }

  ngOnInit(): void {
  }
public deleteQuote(i:number){
  console.log(i);
  this.deleteSingleQuote.emit(i);
}
public upVote(i:number){
 this.upvoteQuote.emit(i);
}
public downVote(i:number){
  this.downvoteQuote.emit(i)
}

}

