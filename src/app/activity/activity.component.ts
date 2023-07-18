import { Component } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {

  public activity:any={};

  constructor(private avtivityService: ActivityService){

    this.avtivityService.getactivitys().subscribe(
      (data:any)=>{
        this.activity=data;
      },
      (err:any)=>{
      alert("Internal server error");
      }
    )
  }


reload(){
  this.avtivityService.getactivitys().subscribe(
    (data:any)=>{
      this.activity=data;
    },
    (err:any)=>{
    alert("Internal server error");
    }
  )

}
}

