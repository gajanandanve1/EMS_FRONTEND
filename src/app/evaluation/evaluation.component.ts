import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Employee } from '../model/employee';
import { EmployeeserviceService } from '../services/employeeservice.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {
  employee=new Employee();
  employeeList: any;

  constructor(private employeeService:EmployeeserviceService,private _router:Router) { }

  msg="";
empId;
searchText;
  changeEmployeeId(id){
this.empId=id.target.value;
console.log(id.target.value)
  }
  ngOnInit(): void {
   this.employeeService.fetchEmployeeDetailsByRemote().subscribe(
    (data:any)=>{
      this.employeeList=data;
    }
   )
  }
input:any;
startEvaluation(input:any){
  //input=this.employee.employeeId;

 if(input=this.employee.employeeId){
  this.employeeService.fetchEmployeeById(input).subscribe(
    data=>{
      console.log(data);
      this.employee=data;
      this._router.navigate(["/dashboard/add-evaluation-byId/",input]);
      Swal.fire("You want start Evaluation","welcome","success");
    }
  )}


  if( input=this.employee.employeeName){
    this.employeeService.fetchEmployeeByName(input).subscribe ( data=>{
      console.log(data);
      this.employee=data;
      this._router.navigate(["/dashboard/add-evaluation-byName/",input])
    }
  )
  }
  
}

  startEval(empId,employeeName:string)
  {
    empId=this.employee.employeeId;
    employeeName=this.employee.employeeName;
    this.employeeService.fetchByIdAndName
    (empId,employeeName).subscribe(k=>{
      console.log(k);
      console.log(this.employee.employeeName);
      this.employee=k;
   //  this._router.navigateByUrl("/dashboard/add-evaluation",employeeId,employeeName);
    // this._router.navigate(["/dashboard/add-evaluation/",empId,employeeName])
      
      // if(k!="")
      // {
      //   Swal.fire("Login sucessfully","welcome","success");
      //   this._router.navigateByUrl("/dashboard/evaluationform");
      // }
      // else{
      //   Swal.fire("Sorry");
      // }
    })
  
  
  }
}
