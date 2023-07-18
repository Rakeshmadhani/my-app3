import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-creat-account',
  templateUrl: './creat-account.component.html',
  styleUrls: ['./creat-account.component.scss']
})
export class CreatAccountComponent {

  public accountForm: FormGroup = new FormGroup({
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    profie_picture: new FormControl(),
   });
   constructor(private bankService:BankService){}

   submit(){

    console.log( this.accountForm.value)

    this.bankService.createaccount(this.accountForm.value).subscribe(
      (data:any)=>{
        alert("Account creation succesfully");
      },
      (err:any)=>{
        alert("account creation failed");
      }
    )
   }
}
