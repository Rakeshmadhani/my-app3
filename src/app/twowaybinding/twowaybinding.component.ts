import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.scss']
})
export class TwowaybindingComponent {

  public num1:number =0;
  public num2:number =0;
  public result:number =0;

  add(){
    this.result = this.num1+ this.num2;
  }
  sub(){
    this.result = this.num1 - this.num2;
  }
  mul(){
    this.result = this.num1 * this.num2;
  }
  div(){
    this.result = this.num1 / this.num2;
  
  }

}
