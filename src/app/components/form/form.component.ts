import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  write: string
  writer: string
  name: string
  @Output() btnClick = new EventEmitter ()
  
 

  constructor () { 
    this.write=""
    this.writer=""
    this.name=""

  }

  ngOnInit(): void {
  }

  onClick() {
  this.btnClick.emit();
  }

  onSubmit(){
 if (!this.write)
   alert("Please input a quote")
   if (!this.writer)
    alert("Please input a writer")
    if (!this.name)
      alert("Please input a name")
  return 
  
  }
  
    


  }