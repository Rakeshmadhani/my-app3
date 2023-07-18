import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.scss']
})
export class FlipkartComponent {

  public products:any = [];

  constructor(private flipkartservice: FlipkartService){

    this.flipkartservice.getproducts().subscribe(
      (data:any)=>{
        this.products=data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )

  }

}
