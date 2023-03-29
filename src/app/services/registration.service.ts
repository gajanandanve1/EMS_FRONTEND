import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { 
  }
  public addregistration(reg:any){
    return this.http.post(`http://localhost:7079/ems/register/saveData`,reg);
  }

  public loginuserbyremote(reg:any){
    return this.http.post(`http://localhost:7079/ems/register/loginuser`,reg,{responseType:"text" as "json"});
  }
  public setUser(user:any){

    //localStorage.setItem('user',JSON.stringify(user));
    sessionStorage.setItem('user',JSON.stringify(user));
}

}
