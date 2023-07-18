import { Component } from '@angular/core';
import { BankService } from '../bank.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent {
  public banks:any = [];

  public term:string="";

  public column:string="";
  public order:string="";

  public limit:string="";
  public page:string="";

  constructor(private banksservice: BankService){
    this.banksservice.getbanks().subscribe(
      (data:any)=>{
        this.banks=data;
      },
      (err:any)=>{
        alert("Internal service error")
      }

    )
  }
  getFiteredaccounts(){
    this.banksservice.getFilteredaccounts(this.term).subscribe(
      (data:any)=>{
        this.banks=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
  getSortedaccounts(){
    this.banksservice.getSortedaccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.banks=data;
      },
      (err:any)=>{
        alert("Internal server error");
    
      }
    )
     }
     getPagedaccounts(){
      this.banksservice.getPagedaccounts(this.limit,this.page).subscribe(
        (data:any)=>{
          this.banks=data;
        },
        (err:any)=>{
          alert("Internal server error");
      
        }
      )
       }



}
       
        
       
      
    
  
  
