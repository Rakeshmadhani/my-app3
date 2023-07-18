import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private httpCLient: HttpClient){}

doLogin(data:any):Observable<any>{
  return this.httpCLient.post("https://reqres.in/api/login",data)
}
}
