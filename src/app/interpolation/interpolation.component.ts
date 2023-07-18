import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent {

  public phone:number = 9618289603;
  public name:string = "smith";
  public isIndian:boolean = true;

  public prices:number[] =[100,200,300,400];
  public cities:string[] = ['hyd','bang','tamil'];

  public user:any ={
    name:'abc',
    age:20
  };
}


