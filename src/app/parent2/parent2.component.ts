import { Component } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.scss']
})
export class Parent2Component {

  public ap :number = 0;

  public bp : number =0;

  catch(value:any){
  this.bp = value;
  }

}
