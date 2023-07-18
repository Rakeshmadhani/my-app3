import { Component } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  public students:any =[];

  public term:any ="";

  public column:string="";
  public order:string="";

  public limit:string="";
  public page:string="";

  constructor(private studentsService:StudentsService){
  this.studentsService.getstudents().subscribe(
    (data:any)=>{
      this.students=data;
     },
     (err:any)=>{
      alert("Internal server error");
     }
  )
    }
    getFilteredstudents(){
      this.studentsService.getFilteredstudents(this.term).subscribe(
        (data:any)=>{
          this.students=data;
         },
         (err:any)=>{
          alert("Internal server error");
         }
      )
        }

        getSortedstudents(column:any,order:any){
          this.studentsService.getSortedstudents(this.column,this.order).subscribe(
            (data:any)=>{
              this.students=data;
             },
             (err:any)=>{
              alert("Internal server error");
             }
          )
            }
            getPagedtudents(){
                  this.studentsService.getPagedstudents(this.limit,this.page).subscribe(
                (data:any)=>{
                  this.students=data;
                 },
                 (err:any)=>{
                  alert("Internal server error");
                 }
              )
                }
                deletestudent(id:any){
                  this.studentsService.deletestudent(id).subscribe(
                    (data:any)=>{
                     alert("deleted successfully");
                     location.reload();
                     },
                     (err:any)=>{
                      alert("Internal server error");
                     }
                  )
                    }
                  }



