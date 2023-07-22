import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss']
})
export class CreateVehicleComponent {
  public vehicleForm: FormGroup = new FormGroup({
     Vehicle: new FormControl(),
     manufacturer: new FormControl(),
     model: new FormControl(),
     type: new FormControl(),
     fuel: new FormControl(),
     color: new FormControl(),
     image: new FormControl(),
  });
  public id:any = "";

  constructor(private vehicleService: VehicleService, private activatedroute:ActivatedRoute){

    activatedroute.params.subscribe(
      (data:any)=>{
        this.id = data.id;

        vehicleService.getVehicle(this.id).subscribe(
          (data:any)=>{
            this.vehicleForm.patchValue(data);
          }
        )
      }
    )
  }

     
     

  submit(){
    console.log( this.vehicleForm.value );
    if(this.id?.length>0){
    this.vehicleService.updateVehicle(this.id,this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("vehicle update successfully");
      },
      (err:any)=>{
        alert("vehicle update failed");
      }
    )
  }
  else{
    this.vehicleService.createVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("vehicle creation successfully");
      },
      (err:any)=>{
        alert("vehicle cfreation failed");
      }
    )

  }
  }
}
