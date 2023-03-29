import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent  implements OnInit{
  registerForm!: FormGroup;
  employee=new Employee();
  loading = false;
  submitted = false;

  baseLocations:Array<string>=[
    "Pune","Mumbai","Bengaluru","Indore","Chennai","Jaipur","Hyderabad"
  ]

  currentLocations=["Magarpatta City","Hinjewadi MIDC","Crystal IT PARK","Jaipur","Hyderabad- Phoenix - H-07",
                    "Chennai","Jaipur"]

  frontEndList:Array<String>=[
    "JavaScript"," HTML" ,"CSS" ,"React" ,"React Native","Angular"
  ]
  front;

  location;
  constructor( private formBuilder: FormBuilder,
    private router: Router,private service:EmployeeserviceService){}
  ngOnInit() {
  
  }

  onSubmit(){
    this.submitted = true;
    this.loading=true;
    this.service.addOnboardEmployeeDetailsByRemote(this.employee).subscribe(
      
      (data:any)=>{
  
        this.submitted = true;
         this.loading=true;
        
        alert("Data inserted");
        Swal.fire("Register sucessfully","welcome","success");
        
    this.router.navigateByUrl("dashboard/employeedetails");
       
      },
      (Error:any)=>{
        this.router.navigateByUrl("/login");
      }
  
    )

  }

  ;
  change(location){
    this.location=location.target.value;
    console.log(location.target.value)
  }

  current;
  change1(current){
    this.current=current.target.value;
    console.log(current.target.value)
  }

  

}
