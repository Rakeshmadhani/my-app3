import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component {

  
  @Input() public ac :number =0;

  public bc : number = 0;
  @Output() public bEvent:EventEmitter<any>=new EventEmitter();

  send(){

    this.bEvent.emit(this.bc);
   }
  


}
