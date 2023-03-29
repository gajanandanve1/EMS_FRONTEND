import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http:HttpClient) { }

   getAllRating():Observable<any>{
    return this.http.get<any>("http://localhost:7079/ems/rating/get-all-rating");
  }
}
