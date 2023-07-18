import { Component } from '@angular/core';

@Component({
  selector: 'app-formtable',
  templateUrl: './formtable.component.html',
  styleUrls: ['./formtable.component.scss']
})
export class FormtableComponent {
  
public products:any=[

  {snum:1,name:'pen',price:'10', Rating:3, Freedelivery:true},
  {snum:2,name:'phone',price:'100', Rating:2, Freedelivery:true},
  {snum:3,name:'shirt',price:'400', Rating:5, Freedelivery:true},
  {snum:4,name:'cap',price:'500', Rating:2.5, Freedelivery:true},
  {snum:5,name:'mobile',price:'700', Rating:3, Freedelivery:true},
  {snum:6,name:'remote',price:'200', Rating:4, Freedelivery:true,},
]
price(){
  this.products=this.products.sort((a:any,b:any)=>a.price-b.price)


}
rating(){
this.products=this.products.sort((a:any,b:any)=>b.price-a.price)

}
total(){
  var total =this.products.reduce((sum:number,a:any)=>sum+a.price)

}
delet(i:any){
  this.products.splice(i,1)
}


}
