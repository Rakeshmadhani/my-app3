import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemesService {

  constructor( public httpClient:HttpClient) { }

  getmemes():Observable<any>{
    return this.httpClient.get("https://api.imgflip.com/get_memes")
  }
}
