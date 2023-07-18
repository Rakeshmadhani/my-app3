import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent {
  public term:string="";
public students:any=[
  {name:'Ajay', science:90, math:33},
  {name:'sai ram', science:25, math:55},
  {name:'sai krishna', science:59, math:43},
  {name:'ram raj', science:31, math:88},
  {name:'ram krish', science:80, math:18},
];
public today:any= new Date();
search(){
  this.students=this.students.filter((student:any)=>student.name.includes(this.term));
}
add(){
  this.students=this.students.map((student:any)=>{
  student.science=student.science+2;
  return student;
});
}
sort(){
  this.students=this.students.sort((a:any,b:any)=>b.science-a.science);
}
total(){
  var total=this.students.reduce((sum:number,a:any)=>sum+a.science,0)
  alert( total );
}






}

