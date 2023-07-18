import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent {

  public names:string[] =['Ajay', 'Vijay', 'Rakesh'];
  public states:string[]=['Telangana','kerala','Andra'];
  public products:any=[
    {name:'pen',price:20},
    {name:'watch',price:30},
    {name:'pencil',price:50}
     ];
    public users:any=[
      {name:'a',phone:'9494',class:'10',marks:'100'},
      {name:'b',phone:'8484',class:'8',marks:'80'},
      {name:'c',phone:'7474',class:'6',marks:'70'}


    ];
    public num:number=0




}
