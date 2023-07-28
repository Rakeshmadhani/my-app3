import { Component } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss']
})
export class Parent1Component {

  public ap : number =0;

  public bp : number= 0;

  catch(value:any){
    this.bp=value;
  }

}
