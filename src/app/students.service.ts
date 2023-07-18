import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor( public httpclient:HttpClient) { }

  getstudents():Observable<any>{
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");

  }
  getFilteredstudents(term:any):Observable<any>{
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term);

}
getSortedstudents(column:any, order:any):Observable<any>{
  return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+column+"&order="+order);

}
getPagedstudents(limit:any, page:any):Observable<any>{
  return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit="+limit+"&page="+page);

}

deletestudent(id:any):Observable<any>{
  return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id);

}
}