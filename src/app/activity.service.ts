import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor( public httpClient: HttpClient) { }

  getactivitys():Observable<any>{
    return this.httpClient.get("https://www.boredapi.com/api/activity")
  }
}
