import { Component } from '@angular/core';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.scss']
})
export class Parent3Component {
  public num1:number=0;
  public num2:number=0;

  public result:any=[];

  catch(value:any){
    this.result=value;
  }

}
