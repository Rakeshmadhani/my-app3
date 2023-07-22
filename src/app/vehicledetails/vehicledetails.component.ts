import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicledetails',
  templateUrl: './vehicledetails.component.html',
  styleUrls: ['./vehicledetails.component.scss']
})
export class VehicledetailsComponent {

  public id:any="";

  public vehicle:any={};

  constructor(private activatedRoute: ActivatedRoute, private vehicleService: VehicleService){

    activatedRoute.params.subscribe(
      (data:any)=>{
        this.id = data.id;

        vehicleService.getVehicle(this.id).subscribe(
          (data:any)=>{
            this.vehicle = data;
          }
        )
      }
    )
  }

}
