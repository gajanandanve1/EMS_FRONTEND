import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { Evaluation } from '../model/evaluation';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
 
 
 employee=new Employee();
  constructor(private http:HttpClient) { }

  fetchEmployeeDetailsByRemote():Observable<any>{
    return this.http.get("http://localhost:7079/ems/employee/get-all-onboard-employees-details");
  }
  addOnboardEmployeeDetailsByRemote(employee:any){
    return this.http.post("http://localhost:7079/ems/employee/onboard-new-employee",employee)
    
  }

  public deleteEmplyeeByRemote(employeeId:number):Observable<any>{
    return this.http.delete("http://localhost:7079/ems/employee/delete-employee/"+employeeId);
  }

  //Update by employee Id
  updateEmployeeById(employeeId:number,employee:Employee):Observable<Employee> {
    return this.http.put<Employee>("http://localhost:7079/ems/employee/updateEmpById/"+employeeId,employee);
  }

  //get by employee Id
  public fetchEmployeeById(employeeId: number):Observable<any> {
    return this.http.get("http://localhost:7079/ems/employee/get-employee/"+employeeId);
  }

  public fetchEmployeeByName(employeeName: string):Observable<any> {
    return this.http.get("http://localhost:7079/ems/employee/"+employeeName+"/employee");
  }

  public fetchByIdAndName(employeeId:number,employeeName:string):Observable<any>{
    return this.http.get("http://localhost:7079/ems/employee/serarch-by-id-name/"+employeeId+"/"+employeeName+"/evaluation");
  }
  public addEval(employeeId:number,evaluation:Evaluation):Observable<Evaluation>
  {
    return this.http.put<Evaluation>("http://localhost:7079/ems/employee/addEvaluation/"+employeeId,evaluation);
  }

  public addEvalByName(employeeName:string,evaluation:Evaluation):Observable<Evaluation>
  {
    return this.http.post<Evaluation>("http://localhost:7079/ems/employee/addEvaluation-employeeName/"+employeeName,evaluation);
  }

    public showEvaluationById(employeeId:number):Observable<any>{
      return this.http.get('http://localhost:7079/ems/employee/employes-by/'+employeeId +'/evaluation');
    }


    public showEvaluationByName(employeeName: string):Observable<any> {
      return this.http.get('http://localhost:7079/ems/employee/employee-byName/'+employeeName +'/evaluation');
    }


}
