import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component {

  @Input() public ac : number = 0;

  public bc :number = 0;

  @Output() public bEvent:EventEmitter<any>=new EventEmitter();

  send(){
    this.bEvent.emit(this.bc)
  }







}
