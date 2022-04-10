import { Component, OnInit } from '@angular/core';

interface quote{
  newQuote:string;
  author:string;
  name: string;
  dateCreated:Date;
  upvotes: number;
  downvotes:number;

}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

 
  // onSubmit(any){
  //   right.value
// }
//   write: string
//   writer: string
//   name: string
//   // @Output() btnClick = new EventEmitter ()
  
 

//   // }
//   // onSubmit(){
//   //   if (!this.write)
//   //     alert("Please input a quote")
      
//   //     if (!this.writer)
//   //      alert("Please input a writer")
//   //      if (!this.name)
//   //        alert("Please input a name")
//   //    return 
//   //    console.log(write)
//   //    }  
public quoteArray:quote[]=[];
public author='';
public newQuote= '';
public name='';


 constructor (){ 
 }
  ngOnInit(): void {
  }
  public addQuote(){
    const quote:quote= {
      author:this.author, newQuote:this.newQuote, name:this.name, dateCreated:new Date(), upvotes:0 , downvotes:0
    };
  
    this.quoteArray.push(quote);
    console.log("quoteArray", this.quoteArray);
  }

  public deleteQuote(i:number){
console.log("hello", i);
this.quoteArray.splice(i,1);
console.log('Done', this.quoteArray);
  }
  public upvoteQuote(i:number){
    this.quoteArray[i].upvotes++;
  }
  public downvoteQuote(i:number){
    this.quoteArray[i].downvotes++;
    console.log('Here', this.quoteArray);
  }
  }