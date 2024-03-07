import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlanetInfoService {

  constructor(private http: HttpClient) { }

  get(url:string) : Observable<any>{
    return this.http.get(url)
    // (error)=>{
    //   console.log('Some thing went wrong')
    // }
    // ))
  }
}
