import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  deleteEvaluationByRemote(evaluationId: number) {
   return this.http.delete('');
  }

  constructor(private http:HttpClient) { }
}
